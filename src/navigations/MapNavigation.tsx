import {createStackNavigator} from '@react-navigation/stack';
import MapHomeScreen from '@/screens/map/map/MapHomeScreen';
import AddLocationScreen from '@/screens/map/map/AddLocationScreen';
import SearchLocationScreen from '@/screens/map/map/SearchLocationScreen';
import {colors} from '@/constants/colors';

export const MapStack = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
    headerBackButtonDisplayMode: 'minimal',
    headerTintColor: colors.BLACK,
    headerStyle: {backgroundColor: colors.WHITE, shadowColor: colors.GRAY_500},
    headerTitleStyle: {fontSize: 16},
  },
  screens: {
    MapHome: {
      screen: MapHomeScreen,
      options: {headerShown: false},
    },
    AddLocation: {
      screen: AddLocationScreen,
    },
    SearchLocation: {
      screen: SearchLocationScreen,
    },
  },
});
