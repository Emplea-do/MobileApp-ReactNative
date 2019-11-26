import {createStackNavigator} from 'react-navigation-stack';
import Search from '../screens/Search';
import SCREENS from '../constants/screens';
import theme from '../theme';

export const SearchStack = createStackNavigator(
  {
    Search: {screen: Search},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: theme.colors.white,
      title: SCREENS.Search.title,
    },
  },
);
