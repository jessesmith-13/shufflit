import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './src/components/LandingPage';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <LandingPage/>
      <StatusBar style="auto" />
    </View>
  );
}
