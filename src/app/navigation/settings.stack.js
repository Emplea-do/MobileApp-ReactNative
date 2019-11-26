import {createStackNavigator} from 'react-navigation-stack';
import Settings from '../screens/Settings';
import SCREENS from '../constants/screens';
import theme from '../theme';

export const SettingsStack = createStackNavigator(
  {
    Settings: {screen: Settings},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: theme.colors.white,
      title: SCREENS.Settings.title,
    },
  },
);
