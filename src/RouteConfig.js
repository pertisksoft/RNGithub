import React, { Component } from "react";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { configRoute } from "./utils";
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
    //initialRouteName: "Home",
    tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: false,
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeTintColor: "#0091EA",
      inactiveTintColor: "#666",
      style: {
        backgroundColor: "white",
        borderColor: "#fcfcfc",
        borderTopWidth: 0,
        marginTop: -10,
        paddingTop: 10,
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowOffset: {
          width: 0,
          height: -3
        },
        shadowColor: "#e8eaf6",
        elevation: 4
      }
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        //console.log("navigationOptions", routeName, focused);
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
    Welcome: { screen: Welcome },
    Tab: { screen: TabNavigation },
    Login: { screen: Login },
    Search: { screen: Search }
  }),
  {
    initialRouteName: "Tab",
    headerMode: "none"
    /*onTransitionStart: e => {
      console.log("onTransitionStart", e);
    },
    onTransitionEnd: e => {
      console.log("onTransitionEnd", e);
    }*/
  }
);
