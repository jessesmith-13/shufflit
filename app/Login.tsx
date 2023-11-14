import React from 'react';
import { View, Text, Button } from 'react-native';
import  { useRouter }  from 'expo-router';

const Login = () => {
  const router = useRouter();
  
  return (
    <View>
      <Text>
        Login Page
      </Text>
      <Button
        onPress={()=> router.back()}
        title='Go Back'
      />
    </View>
  )
}

export default Login;