import React, { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import { Image, View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    try {
      const fonts = loadFonts([Ionicons.font]);
      const images = loadImages(
        [require("./assets/659096.jpg")],
        "http://owenfood.speedgabia.com/cr/cr_008/coming_event_6.jpg"
      );
      await Promise.all([...fonts, ...images]);
    } catch (e) {
      console.error(e);
    } finally {
      setReady(true);
    }
  };
  useEffect(() => {
    startLoading();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) return null;

  return (
    <View onLayout={onLayoutRootView}>
      <Text>splash screen</Text>
    </View>
  );
}
