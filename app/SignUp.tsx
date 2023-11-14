import React from 'react';
import { View, Text, Button } from 'react-native';
import  { useRouter }  from 'expo-router';

const SignUp = () => {
  const router = useRouter();
  return (
    <View>
      <Text>
        Sign Up Page
      </Text>
      <Button
        onPress={()=> router.back()}
        title='Go Back'
      />
    </View>
  )
}

export default SignUp;