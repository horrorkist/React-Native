import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";

const NativeStack = createNativeStackNavigator();

const ScreenOne = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("two")}>
      <Text>One</Text>
    </TouchableOpacity>
  );
};
const ScreenTwo = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("three")}>
      <Text>Two</Text>
    </TouchableOpacity>
  );
};
const ScreenThree = ({ navigation: { navigate, setOptions, goBack } }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigate("one")}>
        <Text>Three</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setOptions({})}>
        <Text>Three</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>Three</Text>
      </TouchableOpacity>
    </>
  );
};

export default function Stacks() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="one" component={ScreenOne}></NativeStack.Screen>
      <NativeStack.Screen name="two" component={ScreenTwo}></NativeStack.Screen>
      <NativeStack.Screen
        name="three"
        component={ScreenThree}
      ></NativeStack.Screen>
    </NativeStack.Navigator>
  );
}
