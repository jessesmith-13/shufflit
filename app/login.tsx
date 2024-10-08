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
        <View
          style={styles.titleContainer}
        >
          <ThemedText>
            Sign in Using
          </ThemedText>
          <Input
            text='hi'
          ></Input>
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
    // opacity: 1,
    flexDirection: 'column'
  },
  signInContainer: {
    flex: 1
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 2,
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
    // opacity: 0.5  
  },
});

registerRootComponent(HomeScreen);