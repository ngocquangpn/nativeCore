import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import RootReducer from '../reducer/RootReducer';
import RootEpic from '../epic/RootEpic';

import Config from '../../config';

const epicMiddleware = createEpicMiddleware();

const persistConfig = {
    key: Config.STORE_NAME,
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(
        epicMiddleware,
    ),
);

epicMiddleware.run(RootEpic);

export const persistor = persistStore(store);

export default store;

