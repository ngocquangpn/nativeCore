import StatusBarConstants from '../constant/StatusBarConstants';
import {colors}           from "../../theme";

const initialState = {
    isVisible: true,
    color: colors.theme
};

export default function (state = initialState, action) {
    switch (action.type) {
        case StatusBarConstants.STATUS_BAR_OPEN:
            return {
                ...state,
                isVisible: true
            };
        case StatusBarConstants.STATUS_BAR_CLOSE:
            return {
                ...state,
                isVisible: false
            };
        case StatusBarConstants.STATUS_BAR_TOGGLE:
            return {
                ...state,
                isVisible: !state.isVisible
            };
        case StatusBarConstants.STATUS_BAR_SET_COLOR:
            return {
                ...state,
                color: action.color
            };
        default:
            return state;
    }
}
