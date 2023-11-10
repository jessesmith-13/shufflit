import {Text, View, Button, Alert, Pressable} from 'react-native';
import React from 'react';
import RegularButton from './Buttons/RegularButton';

const LandingPage = (props) => {

  return (
    <View>
      <Text className="mb-8">Shufflit</Text>
      <RegularButton
        className='border-solid border-2 border-indigo-600'
        onPress={() => Alert.alert('YOU HAVE PRESSED THE LOGIN BUTTON')}
        text='Login'
      />
      <Button
        onPress={() => {}}
        title="Sign Up"
      />

    </View>
  )
}

export default LandingPage;