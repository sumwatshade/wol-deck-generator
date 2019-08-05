import React, { useEffect } from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import tabConfig, {tabIconConfig} from "./assets/tabconfig";

import * as Font from "expo-font";


/* eslint-disable */
const navigatorConfig = {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: () => {
            const { routeName } = navigation.state;
            const config = tabIconConfig[routeName];
            return <Icon name={config.icon} size={25} />;
        }
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
};
/* eslint-enable */

const MainNavigator = createMaterialBottomTabNavigator(tabConfig, navigatorConfig);
const App = createAppContainer(MainNavigator);

const Root: React.FunctionComponent<{}> = () => {
    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                GameOver: require("./assets/fonts/game_over.ttf")
            });
        }

        loadFonts();

    },[Font]);

    return <App/>;
};

export default Root;
