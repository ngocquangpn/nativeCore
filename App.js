import React, {PureComponent} from 'react';
import {
    LogBox, View, ActivityIndicator,
    SafeAreaView, InteractionManager
}                             from 'react-native';
import {ThemeProvider}        from "react-native-elements";
import StatusBar              from './src/view/component/StatusBar/StatusBar';
import {PersistGate}          from 'redux-persist/es/integration/react';
import store, {persistor}     from './src/view/store/store';
import {Provider}             from 'react-redux';
import './src/Languages/Translations';
import theme                  from "./src/theme";
import Router                 from './src/routes';

LogBox.ignoreAllLogs(true);

/**
 *
 * @returns {*}
 * @constructor
 */
const LoadingPersisGate = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={30} color='blue'/>
        </View>
    );
};

/**
 *
 */
class App extends PureComponent {

    componentDidMount() {
        InteractionManager.setDeadline(1000);
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<LoadingPersisGate/>}
                    persistor={persistor}
                >
                    <ThemeProvider theme={theme}>
                        <SafeAreaView
                            style={{flex: 1}}
                        >
                            <StatusBar/>
                            <Router/>
                        </SafeAreaView>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
