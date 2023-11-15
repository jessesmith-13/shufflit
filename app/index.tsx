import { StyleSheet, Text, View } from "react-native";
import LandingPage from "./LandingPage";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";

export default function Page() {
  const [fontsLoaded, fontError] = useFonts({
    'GothicOne': require('../assets/fonts/PathwayGothicOne-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <View>
        <Text style={{ fontFamily: 'GothicOne' }}>
          Blah
        </Text>
        <LandingPage></LandingPage>
      </View>
    </View>
  );
}
