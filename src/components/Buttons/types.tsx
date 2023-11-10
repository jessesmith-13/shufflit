import { ReactNode } from 'react';
import { StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';

export interface ButtonProps {
  className: string;
  onPress: (event: GestureResponderEvent) => void | undefined;
  text: string;
}