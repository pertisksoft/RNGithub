import React, { Component } from "react";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { configRoute } from "react-navigation-easy-helper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Home, Trending, Popular, Profile, Favorite } from "./screens";
import { Welcome, Login, Search } from "./screens";

const TabNavigation = TabNavigator(
  configRoute({
    Home: { screen: Home },
    Trending: { screen: Trending },
    Popular: { screen: Popular },
    Favorite: { screen: Favorite },
    Profile: { screen: Profile }
  }),
  {
    tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: false,
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeTintColor: "#0091EA",
      inactiveTintColor: "#666",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0
      }
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Trending") {
          iconName = "visibility";
        } else if (routeName === "Popular") {
          iconName = "star";
        } else if (routeName === "Favorite") {
          iconName = "schedule";
        } else if (routeName === "Profile") {
          iconName = "person-outline";
        }
        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

export const AppNavigator = StackNavigator(
  configRoute({
    Tab: { screen: TabNavigation },
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
