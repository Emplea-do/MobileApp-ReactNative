import { createStackNavigator } from 'react-navigation-stack';
import Search from '../screens/Search';
import Listing from '../screens/Listing';

import { SCREENS } from '../constants/screens';
import theme from '../theme';

export const SearchStack = createStackNavigator(
  {
    Search: { screen: Search },
    Listing: { screen: Listing },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.white,
      },
      headerTintColor: theme.colors.black,
      title: SCREENS.Search.title,
    },
    cardStyle: {
      backgroundColor: theme.colors.background,
      height: '100%',
    },
  },
);
