import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, TextInputProps } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

const darkBlueColor = Colors.darkBlue.color;
const primaryFont = Fonts.primary;

interface InputFieldProps extends TextInputProps {
  placeholder: string;
  borderColor?: string;
  width: number;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  borderColor = Colors.darkBlue.color,
  width='70%',
  ...props
}) => {
  const [text, setText] = useState('');
  
  return (
    <View style={[styles.inputContainer]}>
      <View style={styles.placeholderContainer}>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={text}
          onChangeText={setText}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    marginVertical: 10,
    position: 'relative',
    width: '70%',
    borderColor: darkBlueColor,
  },
   placeholderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#000',
    backgroundColor: 'transparent',
    width: '100%',
    fontFamily: primaryFont
  },
  placeholder: {
    fontSize: 16,
    color: darkBlueColor,
    fontFamily: primaryFont,
    marginRight: 10,
  },
});

export default InputField;