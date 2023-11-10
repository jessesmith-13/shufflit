import React from "react";
import { Pressable, Text } from 'react-native';
import { ButtonProps } from './types'

const RegularButton: React.FunctionComponent<ButtonProps> = ({className, onPress, text}) => {
  return (
    <Pressable className={className} onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  )
}

export default RegularButton;