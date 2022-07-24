import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import Tabs from "./Tabs";
import Stacks from "./Stacks";

const RootStack = createNativeStackNavigator();

export default function Root() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="tabs" component={Tabs} />
      <RootStack.Screen name="stacks" component={Stacks} />
    </RootStack.Navigator>
  );
}
