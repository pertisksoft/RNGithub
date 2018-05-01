import { StackNavigator, TabNavigator } from "react-navigation";
import { configRoute } from "react-navigation-easy-helper";

// tab nav
import { Home, Trending, Popular, Profile, Favorite } from "./screens";

// stack nav
import { Welcome, Login, Search } from "./screens";

// tabbar component
//import { BottomNavigator } from "./components";

const TabNav = TabNavigator(
  configRoute({
    Home: { screen: Home },
    Trending: { screen: Trending },
    Popular: { screen: Popular },
    Favorite: { screen: Favorite },
    Profile: { screen: Profile }
  }),
  {
    tabBarPosition: "bottom",
    //tabBarComponent: BottomNavigator,
    swipeEnabled: false,
    animationEnabled: false
  }
);

export const AppNavigator = StackNavigator(
  configRoute({
    Tab: { screen: TabNav },
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    Search: { screen: Search }
  }),
  {
    initialRouteName: "Tab",
    headerMode: "none",
    onTransitionStart: e => {
      //console.log("onTransitionStart", e);
    },
    onTransitionEnd: e => {
      //console.log("onTransitionEnd", e);
    }
  }
);
