import { Pressable, Text, type PressableProps, StyleSheet } from 'react-native';

import { Colors } from '../constants/Colors';

export type PrimaryButtonProps = PressableProps & {
  color: 'blue' | 'green';
  size: 'small' | 'medium' | 'large';
  text: string;
};

export function PrimaryButton({
  onPress,
  size,
  text,
  color,
  ...rest
}: PrimaryButtonProps) {
  const buttonStyles = StyleSheet.flatten([
    styles.primaryButton,
    size === 'small' && styles.small,
    size === 'medium' && styles.medium,
    size === 'large' && styles.large,
    color === 'blue' && styles.blue,
    color === 'green' && styles.green,
  ])

  return (
    <Pressable
      onPress={onPress}
      style={buttonStyles}
      {...rest}
    >
      <Text
        style={styles.buttonText}
      >
        {text.toUpperCase()}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  small: {
    height: 32,
    width: '30%',
  },
  medium: {
    width: '50%',
    height: 48
  },
  large: {
    width: '75%',
    height: 48
  },
  blue: {
    backgroundColor: Colors.darkBlue.color,
  },
  green: {
    backgroundColor: Colors.sageGreen.color,
  }
});
