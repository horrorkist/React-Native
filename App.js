import React, { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import { Image, View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [assets] = useAssets([require("./assets/659096.jpg")]);
  const [fonts] = Font.useFonts(Ionicons.font);

  const onLayoutRootView = useCallback(async () => {
    if (assets && fonts) {
      await SplashScreen.hideAsync();
    }
  }, [assets, fonts]);

  if (!assets || !fonts) return null;

  return (
    <View onLayout={onLayoutRootView}>
      <Text>splash screen</Text>
    </View>
  );
}
