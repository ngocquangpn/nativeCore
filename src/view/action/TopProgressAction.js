import TopProgressConstant from '../constant/TopProgressConstant';

export default {
    reset: () => {
        return {
            type: TopProgressConstant.TOP_PROGRESS_RESET,
        };
    },

    update: (progress) => {
        return {
            type: TopProgressConstant.TOP_PROGRESS_UPDATE,
            progress,
        };
    },

    show: () => {
        return {
            type: TopProgressConstant.TOP_PROGRESS_SHOW,
        };
    },

    hide: () => {
        return {
            type: TopProgressConstant.TOP_PROGRESS_HIDE,
        };
    },

    toggle: () => {
        return {
            type: TopProgressConstant.TOP_PROGRESS_TOGGLE,
        };
    },
};
