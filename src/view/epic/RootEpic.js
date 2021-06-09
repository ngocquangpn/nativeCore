import {combineEpics} from 'redux-observable';

import UserEpic from './UserEpic';
// Import new Epic here

// End new import

export default combineEpics(
    UserEpic,
    // Combine new epic here

    // End combine here
);
