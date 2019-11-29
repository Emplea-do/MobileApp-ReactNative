import {createStackNavigator} from 'react-navigation-stack';
import Profile from '../screens/Profile';
import SCREENS from '../constants/screens';
import theme from '../theme';

export const ProfileStack = createStackNavigator(
  {
    Profile: {screen: Profile},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: theme.colors.white,
      title: SCREENS.Profile.title,
    },
    headerMode: 'none',
    cardStyle: {
      backgroundColor: theme.colors.background,
      height: '100%',
    },
  },
);
