import {Text, View, Button, Alert, Pressable} from 'react-native';
import React from 'react';
import RegularButton from '../src/components/Buttons/RegularButton';
import { Link } from 'expo-router';

const LandingPage = (props) => {

  return (
    <View>
      <Text className="mb-8">Shufflit</Text>
      <Link
        href="/LoginPage"
      >
        <RegularButton
          className='border-solid border-2 border-indigo-600'
          onPress={() => Alert.alert('YOU HAVE PRESSED THE LOGIN BUTTON')}
          text='Login'
        />
      </Link>
      <Link
        href="/SignUp"
      >
        Sign Up
      </Link>

    </View>
  )
}

export default LandingPage;