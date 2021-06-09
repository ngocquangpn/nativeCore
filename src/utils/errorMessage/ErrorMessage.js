const _LIST_ERROR_MESSAGE = {};

export const getErrorMessage = (error) => {
    if (typeof error === 'string') {
        return error;
    }

    if (typeof error === 'object') {
        return _LIST_ERROR_MESSAGE[error._error_message] ?? error._error_message;
    }

    return 'Somethings wrong!';
};

export default {
    getErrorMessage,
};
