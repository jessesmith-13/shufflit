import React from 'react';
import { View, Text, Button, Image, Pressable } from 'react-native';
import  { useRouter }  from 'expo-router';
import styles from '../src/styles/sign_up_page.scss';
import colors from '../src/styles/colors.scss';

const SignUp = () => {
  const router = useRouter();
  return (
    <View className={styles.container}>
      <View className={styles.heroImageContainer}>
        <Image
          className={styles.heroImage}
          source={require('../assets/hero-image.png')}
        />
        <Text
          className={`${styles.heading} ${styles.heroImageText}`}
        >
          Never fail a test again.{"\n"}
          Sign up today.
        </Text>
      </View>
      <View
        className={styles.signUpContainer}
      >
        <Text 
          className={`${styles.heading} ${styles.signUpHeading}`}
        >
          Sign up
        </Text>
        <View
          className={`${styles.socialButtonsContainer}`}
        >
          <Pressable
            className={`${styles.socialButton} ${styles.googleButton}`}
            >
            <Text
              className={`${styles.socialButtonText}`}
            >
              Continue with Google
            </Text>
          </Pressable>
          <Pressable
            className={`${styles.socialButton}`}
            >
            <Text
              className={`${styles.socialButtonText}`}
            >
              Continue with Facebook
            </Text>
          </Pressable>
        </View>
        <View>
          <View></View>
          <Text>
            OR EMAIL
          </Text>
          <View></View>
        </View>
        <Button
          onPress={()=> router.back()}
          title='Go Back'
        />
      </View>
    </View>
  )
}

export default SignUp;