import {createStackNavigator} from 'react-navigation-stack';
import Profile from '../screens/Profile';
import SCREENS from '../constants/screens';
import {colors} from '../theme';

export const ProfileStack = createStackNavigator(
  {
    Profile: {screen: Profile},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      title: SCREENS.Profile.title,
    },
    headerMode: 'none',
    cardStyle: {
      backgroundColor: colors.background,
      height: '100%',
    },
  },
);
