import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../navigation/screens/Home";
import { Ionicons } from '@expo/vector-icons';

export const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={"black"} size={size} />
        ),
        
      },
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

