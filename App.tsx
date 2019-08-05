import React, {useState} from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import tabConfig, {tabIconConfig} from "./assets/tabconfig";

const navigatorConfig = {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            const config = tabIconConfig[routeName];
            return <Icon name={config.icon} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
};

const MainNavigator = createMaterialBottomTabNavigator(tabConfig, navigatorConfig);
export default createAppContainer(MainNavigator);
