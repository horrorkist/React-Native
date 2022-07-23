import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/movies";
import TV from "../screens/tv";
import Search from "../screens/search";
import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies}></Tab.Screen>
      <Tab.Screen name="TV" component={TV}></Tab.Screen>
      <Tab.Screen name="Search" component={Search}></Tab.Screen>
    </Tab.Navigator>
  );
}
