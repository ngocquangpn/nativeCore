import authScreens    from "../view/screens/0-Auth/etc/config";
import HomeScreens    from "../view/screens/1-Home/etc/config";
import ProfileScreens from "../view/screens/2-Profile/etc/config";

//
const drawerRoutes = [
    HomeScreens,
    ProfileScreens
];

//
const bottomRoutes = [
    HomeScreens,
    ProfileScreens
];

//
const publicRoutes = [
    authScreens
];

const privateRoutes = [
    ...drawerRoutes,
    ...bottomRoutes
];

export default {
    publicRoutes,
    privateRoutes,
    drawerRoutes,
    bottomRoutes
};
