import { ImageBackground, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { PrimaryButton } from '@/components/PrimaryButton';
import { registerRootComponent } from 'expo';
import { Input } from '@/components/Input';
import { rgbaColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

function HomeScreen() {
  return (
    <View
      style={styles.container}
    >
      <ImageBackground
          source={require('@/assets/images/landing-page.jpg')}
          style={styles.heroImage}
      >
        <View style={styles.overlay}></View>
        <View
          style={styles.titleContainer}
        >
          <ThemedText
            type='title'
            color='blue'
          >
            Sign in using
          </ThemedText>
        </View>
        <View
          style={styles.signInContainer}
        >
          <PrimaryButton
            size="medium"
            color="blue"
            text="sign in"
            />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  signInContainer: {
    flex: 3,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  heroImage: {
    flex: 1,
    flexDirection: 'column',
    width: null,
    height: null,
  },
});

registerRootComponent(HomeScreen);