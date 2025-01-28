import { createStaticNavigation, StaticParamList } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeTabs } from "./homenavigator";
import { NotFound } from "../navigation/screens/NotFound";
import Login from "../navigation/screens/Login";
import { IsSignedIn } from "../hooks/authHooks";
import Signup from "../navigation/screens/Signup";



const RootStack = createNativeStackNavigator({
  screens: {
    signup: {
        screen: Signup,
        options: {
            title: 'Signup',
        },
    },
    login: {
        screen: Login,
        options: {
            title: 'Login',
        },
    },
    
    HomeTabs: {
      if: IsSignedIn,
      screen: HomeTabs,
      options: {
        title: 'HomeTabs',
        headerShown: false,
      },
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
