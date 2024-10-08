import { Pressable, Text, TextInput, type TextInputProps, StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';

import { useThemeColor } from '@/hooks/useThemeColor';

export type InputProps = TextInputProps & {
  text: string;
};

export function Input({
  onPress,
  text,
  ...rest
}: InputProps) {

  return (
    <ThemedView>
      <Text>
        {text}
      </Text>
      <TextInput>

      </TextInput>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  
});
