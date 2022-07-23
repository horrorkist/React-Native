import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/movies";
import TV from "../screens/tv";
import Search from "../screens/search";
import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? "#1e272e" : "white",
        },
        tabBarActiveTintColor: isDark ? "#ffd32a" : "#1e272e",
        tabBarInactiveTintColor: isDark ? "#808e9b" : "#808e9b",
        headerStyle: {
          backgroundColor: isDark ? "#1e272e" : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : "black",
        },
      }}
    >
      <Tab.Screen name="Movies" component={Movies}></Tab.Screen>
      <Tab.Screen name="TV" component={TV}></Tab.Screen>
      <Tab.Screen name="Search" component={Search}></Tab.Screen>
    </Tab.Navigator>
  );
}
