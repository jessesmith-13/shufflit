import {Text, View, Button, Alert, Pressable} from 'react-native';
import React from 'react';
import RegularButton from '../src/components/Buttons/RegularButton';
import { Link } from 'expo-router';

const LandingPage = (props) => {

  return (
    <View>
      <Text className="mb-8">Shufflit</Text>
      <Link
        href="/Login"
        asChild
      >
        <Pressable
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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