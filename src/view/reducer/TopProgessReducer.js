import TopProgressConstant from '../constant/TopProgressConstant';

const initialState = {
    progress: 0,
    visibility: false,
};

const TopProgressReducer = function (state = initialState, action) {
    switch (action.type) {
        case TopProgressConstant.TOP_PROGRESS_RESET:
            return initialState;
        case TopProgressConstant.TOP_PROGRESS_UPDATE:
            const {progress} = action;
            if (progress === undefined || progress === null || progress > 100 || progress < 0) {
                return state;
            }
            return {
                ...state,
                progress,
            };
        case TopProgressConstant.TOP_PROGRESS_SHOW:
            return {
                ...state,
                visibility: true,
            };
        case TopProgressConstant.TOP_PROGRESS_HIDE:
            return {
                ...state,
                visibility: false,
            };
        case TopProgressConstant.TOP_PROGRESS_TOGGLE:
            return {
                ...state,
                visibility: !state.visibility,
            };
        default:
            return state;
    }
};

export default TopProgressReducer;
