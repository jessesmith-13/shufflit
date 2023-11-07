import {Text, View, Button, Alert, Pressable} from 'react-native';
import React from 'react';


const LandingPage = (props) => {

  return (
    <View>
      <Text className="mb-8">Shufflit</Text>
      <Pressable
        className="border-solid border-2 border-indigo-600"
        onPress={() => Alert.alert('YOU HAVE PRESSED THE LOGIN BUTTON')}
      ><Text>Login</Text></Pressable>
      <Button
        onPress={() => {}}
        title="Sign Up"
      />

    </View>
  )
}

export default LandingPage;