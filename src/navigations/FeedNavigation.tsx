import {createStackNavigator} from '@react-navigation/stack';
import FeedListScreen from '@/screens/map/feed/FeedListScreen';
import FeedDetailScreen from '@/screens/map/feed/FeedDetailScreen';
import FeedFavoriteScreen from '@/screens/map/feed/FeedFavoriteScreen';
import EditLocationScreen from '@/screens/map/feed/EditLocationScreen';
import {colors} from '@/constants/colors';
import DrawerButton from '@/components/DrawerButton';

export const FeedStack = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
    headerBackButtonDisplayMode: 'minimal',
    headerTintColor: colors.BLACK,
    headerStyle: {backgroundColor: colors.WHITE, shadowColor: colors.GRAY_500},
    headerTitleStyle: {fontSize: 16},
    cardStyle: {backgroundColor: colors.WHITE},
  },
  screens: {
    FeedList: {
      screen: FeedListScreen,
      options: {
        title: '피드',
        headerLeft: () => <DrawerButton />,
      },
    },
    FeedDetail: {
      screen: FeedDetailScreen,
    },
    FeedFavorite: {
      screen: FeedFavoriteScreen,
    },
  },
  EditLocation: {
    screen: EditLocationScreen,
  },
});
