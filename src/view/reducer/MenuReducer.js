import MenuConstant from '../constant/MenuConstant';

const initialState = {
    isOpen: false,
    isHidden: false,
};

const MenuReducer = function (state = initialState, action) {
    switch (action.type) {
        case MenuConstant.MENU_OPEN:
            return {
                ...state,
                isOpen: true,
            };
        case MenuConstant.MENU_CLOSE:
            return {
                ...state,
                isOpen: false,
            };
        case MenuConstant.MENU_TOGGLE:
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        default:
            return state;
    }
};

export default MenuReducer;
