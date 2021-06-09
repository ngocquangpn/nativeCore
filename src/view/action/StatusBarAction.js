import StatusBarConstants from '../constant/StatusBarConstants';

export default {
    open: () => {
        return {
            type: StatusBarConstants.STATUS_BAR_OPEN,
        };
    },

    close: () => {
        return {
            type: StatusBarConstants.STATUS_BAR_CLOSE,
        };
    },

    toggle: () => {
        return {
            type: StatusBarConstants.STATUS_BAR_TOGGLE,
        };
    },

    setColor: (color) => {
        return {
            type: StatusBarConstants.STATUS_BAR_SET_COLOR,
            color,
        };
    },
};
