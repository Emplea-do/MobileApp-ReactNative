import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { SettingsStack } from './settings.stack';
import { SearchStack } from './search.stack';
import { ProfileStack } from './profile.stack';

import theme from '../theme';
import { SCREENS } from '../constants';

const App = createBottomTabNavigator(
  {
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        title: SCREENS.Settings.title,
      },
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        title: SCREENS.Search.title,
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        title: SCREENS.Profile.title,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = SCREENS[routeName].icon;
        return <Ionicons name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: theme.colors.primary,
      inactiveTintColor: theme.colors.secondary,
      style: {
        borderTopWidth: 0,
        paddingBottom: 10,
        backgroundColor: theme.colors.background,
      },
      labelStyle: {
        fontFamily: 'SFProDisplay-Medium',
        letterSpacing: 0.8,
        fontSize: 16,
        marginTop: 20,
      },
    },

    initialRouteName: 'Search',
  },
);

export default createAppContainer(App);
