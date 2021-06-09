import React                                          from 'react';
import {useSelector}                                  from 'react-redux';
import {NavigationContainer}                          from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import {createDrawerNavigator}                        from '@react-navigation/drawer';
import {createBottomTabNavigator}                     from '@react-navigation/bottom-tabs';
import RouteList                                      from './RouteList';
import DrawerContent                                  from './DrawerContent';
import BottomTabContent                               from './BottomTabContent';
import Config                                         from '../config';

const RenderWithLayout = (screens, Layout) => {
    return (
        screens.map(parent => (
            parent.children ?
                parent.children.map(child => (
                    <Layout
                        key={parent.name + child.name}
                        name={parent.name + child.name}
                        component={child.component}
                    />
                ))
                :
                <Layout
                    key={parent.name}
                    name={parent.name}
                    component={parent.component}
                />
        ))
    );
};

/*
Drawer (Sidebar)
 */
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
    return (
        <Drawer.Navigator
            drawerType='front'
            drawerStyle={{
                width: '70%',
                maxWidth: 360
            }}
            drawerContent={() => <DrawerContent/>}
        >
            {RenderWithLayout(RouteList.drawerRoutes, Drawer.Screen)}
        </Drawer.Navigator>
    );
};

/*
Bottom Tab
 */
const BottomTab = createBottomTabNavigator();

const BottomTabScreen = () => {
    return (
        <BottomTab.Navigator
            tabBar={() => <BottomTabContent/>}
        >
            {RenderWithLayout(RouteList.bottomRoutes, BottomTab.Screen)}
        </BottomTab.Navigator>
    );
};

/**
 * Stack Screen
 */

/*
Public Stack
 */
const PublicStack = createStackNavigator();

const PublicStackScreen = () => {
    return (
        <PublicStack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            {RenderWithLayout(RouteList.publicRoutes, PrivateStack.Screen)}
        </PublicStack.Navigator>
    );
};

/*
Private Stack
 */
const PrivateStack = createStackNavigator();

const PrivateStackScreen = () => {
    const {useBottomNavigator, useSidebar} = Config.LAYOUT_CONFIG;
    return (
        <PrivateStack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            {useSidebar && <PrivateStack.Screen name='Drawer' component={DrawerScreen}/>}
            {useBottomNavigator && <PrivateStack.Screen name='BottomTab' component={BottomTabScreen}/>}
        </PrivateStack.Navigator>
    );
};

/*
App navigator
 */
const AppNavigator = () => {

    // const user = useSelector(state => state.core.user);
    //
    // if (user.access_token) {
    //     return (
    //         <NavigationContainer>
    //             <PrivateStackScreen/>
    //         </NavigationContainer>
    //     );
    // }

    return (
        <NavigationContainer>
            <PrivateStackScreen/>
        </NavigationContainer>
    );
};

export default AppNavigator;
