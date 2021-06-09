import UserConstant from '../constant/UserConstant';

const initialState = {};

const UserReducer = function (state = initialState, action) {
    switch (action.type) {
        case UserConstant.USER_LOGIN_RESULT:
            return {
                ...state,
                ...action.user,
            };
        case UserConstant.USER_LOGIN_ERROR:
            return {
                ...state,
                error: action.error,
            };
        case UserConstant.USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default UserReducer;
