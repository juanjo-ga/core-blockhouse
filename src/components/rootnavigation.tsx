import { createStaticNavigation, NavigationContainer, StaticParamList } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeTabs } from "./homenavigator";
import { NotFound } from "../navigation/screens/NotFound";
import Login from "../navigation/screens/Login";


const RootStack = createNativeStackNavigator({
  screens: {
    login: {
        screen: Login,
        options: {
            title: 'Login',
        },
    },
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
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
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
