import {createStackNavigator} from 'react-navigation-stack';
import Search from '../screens/Search';
import SCREENS from '../constants/screens';
import {colors} from '../theme';

export const SearchStack = createStackNavigator(
  {
    Search: {screen: Search},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      title: SCREENS.Search.title,
    },
    headerMode: 'none',
    cardStyle: {
      backgroundColor: colors.background,
      height: '100%',
    },
  },
);
