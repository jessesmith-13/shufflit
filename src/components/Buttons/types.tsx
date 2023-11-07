import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface ButtonProps {
  children: ReactNode;
  className: StyleProp<ViewStyle>;
}