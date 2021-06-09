import React                  from 'react';
import {
    View, ScrollView, TouchableOpacity,
    Platform, StyleSheet, Alert, Image
}                             from 'react-native';
import {ListItem, Icon, Text} from 'react-native-elements';
import {
    getFocusedRouteNameFromRoute,
    useNavigation, useRoute
}                             from '@react-navigation/native';
import {useDispatch}          from 'react-redux';
import RouteList              from './RouteList';
import Config                 from '../config';
import {colors}               from "../theme";

import UserAction from '../view/action/UserAction';


const logo = require("../assets/img/logo/logo-long-bg-white.jpg");

/**
 *
 * @returns {*}
 * @constructor
 */
const DrawerContent = React.memo(() => {

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const route = useRoute();

    const currentRoute = getFocusedRouteNameFromRoute(route);

    const getColor = (name, index) => {
        if (currentRoute === undefined) {
            return index === 0 ? colors.theme : 'black';
        }

        if (name === currentRoute) {
            return colors.theme;
        }

        return 'black';
    };

    const handleLogout = () => {
        Alert.alert("Đăng xuất", "Bạn có đồng ý?", [
            {text: "Hủy bỏ"},
            {text: "Đồng ý", onPress: () => dispatch(UserAction.userLogout())}
        ], {cancelable: true});
    };

    return (
        <View style={styles.main}>
            <ScrollView>
                <View style={styles.logoContainer}>
                    <Image
                        source={logo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                {
                    RouteList.drawerRoutes.map(({name, title, icon, iconType}, index) => (
                        <ListItem
                            key={name}
                            Component={TouchableOpacity}
                            bottomDivider
                            onPress={() => navigation.navigate(name)}
                        >
                            <Icon
                                name={icon}
                                type={iconType ?? 'font-awesome-5'}
                                solid
                                size={16}
                                color={getColor(name, index)}
                            />
                            <ListItem.Content>
                                <ListItem.Title
                                    style={{
                                        color: getColor(name, index)
                                    }}
                                >
                                    {title}
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron/>
                        </ListItem>
                    ))
                }
                <ListItem
                    Component={TouchableOpacity}
                    onPress={handleLogout}
                >
                    <Icon name='arrow-left' type='font-awesome-5' solid size={16}/>
                    <ListItem.Content>
                        <ListItem.Title>
                            Đăng xuất
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </ScrollView>
            <View style={styles.versionContainer}>
                <Text>V{Platform.OS === 'android' ? Config.VERSION.ANDROID : Config.VERSION.IOS}</Text>
            </View>
        </View>
    );
});

export default DrawerContent;

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    logoContainer: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
    logo: {
        width: 150,
        height: 50
    },
    versionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 3,
        paddingHorizontal: 5
    }
});
