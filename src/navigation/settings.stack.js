import {createStackNavigator} from 'react-navigation-stack';
import Settings from '../screens/Settings';
import SCREENS from '../constants/screens';
import {colors} from '../theme';

export const SettingsStack = createStackNavigator(
  {
    Settings: {screen: Settings},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      title: SCREENS.Settings.title,
    },
    headerMode: 'none',
    cardStyle: {
      backgroundColor: colors.background,
      height: '100%',
    },
  },
);
