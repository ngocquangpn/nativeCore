// NAME
const DB_NAME = 'db_default';
const STORE_NAME = 'state';

// VERSION
const VERSION = {
    ANDROID: '0.0.1',
    IOS: '0.0.1',
};

// LAYOUT
const LAYOUT_CONFIG = {
    useSidebar: true,
    useBottomNavigator: false,
};

// EXTENSION
const EXTENSION_CONFIG = {
    usePlugin: false,
    useLayout: false,
    useExtension: false,
};

// COLOR
const COLOR_CONFIG = {
    THEME: 'red',
    TEXT: 'black',
    TEXT_LAYOUT_ACTIVE: 'red',
    TEXT_LAYOUT_INACTIVE: 'black',
    STATUS_BAR: 'red',
};

// NETWORK
const NETWORK_CONFIG = {
    BASE_URL: 'http://192.168.1.36:8000/api/v1',
};

export default {
    DB_NAME,
    STORE_NAME,
    LAYOUT_CONFIG,
    EXTENSION_CONFIG,
    NETWORK_CONFIG,
    COLOR_CONFIG,
    VERSION
};
