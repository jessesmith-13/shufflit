import { ImageBackground, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { PrimaryButton } from '@/components/PrimaryButton';
import { registerRootComponent } from 'expo';
import SocialIconBar from '@/components/SocialIconBar';

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
          <SocialIconBar
            icons={[
              { name: 'facebook', backgroundColor: '#3b5998', onPress: () => console.log('Facebook icon pressed') },
              { name: 'twitter', backgroundColor: '#1da1f2', onPress: () => console.log('Twitter icon pressed') },
              { name: 'instagram', backgroundColor: '#e4405f', onPress: () => console.log('Instagram icon pressed') },
            ]}
          />
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