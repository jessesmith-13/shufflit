import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './app/LandingPage';

export default function App() {
  return (
    <View>
      <LandingPage/>
      <StatusBar style="auto" />
    </View>
  );
}
