import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import MenuReducer from './MenuReducer';
import TopProgressReducer from './TopProgessReducer';
import StatusBarReducer from './StatusBarReducer';
// Import new reducer here


// End import

function coreReducer() {
    return combineReducers({
        user: UserReducer,
        menu: MenuReducer,
        topProgress: TopProgressReducer,
        statusBar: StatusBarReducer
        // Export new reducer here

        // End export
    });
}

/*
 *
 */
function rootReducer() {
    return {
        core: coreReducer(),
    };
}

export default combineReducers(rootReducer());
