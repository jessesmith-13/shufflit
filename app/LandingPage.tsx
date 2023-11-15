import {Text, View, Button, Alert, Pressable} from 'react-native';
import React from 'react';
import RegularButton from '../src/components/Buttons/RegularButton';
import { Link } from 'expo-router';
import styles from '../src/styles/landing_page.scss';

const LandingPage = (props) => {


  return (
    <View className={styles.test}>
      <Text>Shufflit</Text>
      <Link
        href="/Login"
        asChild
      >
        <Pressable
        >
          <Text>
            Login!
          </Text>
        </Pressable>
      </Link>
      <Link
        href="/SignUp"
        asChild
        >
        <Pressable
        >
          <Text>
            Sign Up
          </Text>
        </Pressable>
      </Link>

    </View>
  )
}

export default LandingPage;