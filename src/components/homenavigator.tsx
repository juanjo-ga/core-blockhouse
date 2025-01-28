import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../navigation/screens/Home";

export const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Home',
        
      },
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

