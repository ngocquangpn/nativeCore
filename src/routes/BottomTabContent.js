import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import I18nJs from 'react-native-i18n';
import {useNavigation, getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';
import RouteList from './RouteList';

import Config from '../config';

const {TEXT_LAYOUT_ACTIVE, TEXT_LAYOUT_INACTIVE} = Config.COLOR_CONFIG;

/**
 *
 * @type {React.NamedExoticComponent<object>}
 */
const BottomTabContent = React.memo(() => {

    const navigation = useNavigation();

    const route = useRoute();

    const currentRoute = getFocusedRouteNameFromRoute(route);

    const getColor = (name, index) => {
        if (currentRoute === undefined) {
            return index === 0 ? TEXT_LAYOUT_ACTIVE : TEXT_LAYOUT_INACTIVE;
        }

        if (name === currentRoute) {
            return TEXT_LAYOUT_ACTIVE;
        }

        return TEXT_LAYOUT_INACTIVE;
    };

    return (
        <View style={styles.main}>
            {
                RouteList.bottomRoutes.map(({name, title, icon}, index) => (
                    <TouchableOpacity
                        key={name}
                        onPress={() => navigation.navigate(name)}
                        style={styles.itemContainer}
                    >
                        <Icon
                            name={icon}
                            type='font-awesome-5'
                            size={14}
                            solid
                            color={getColor(name, index)}
                        />
                        <Text
                            style={{
                                color: getColor(name, index),
                            }}
                        >
                            {I18nJs.t(title)}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
});

export default BottomTabContent;

const styles = StyleSheet.create({
    main: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        elevation: 5,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
});
