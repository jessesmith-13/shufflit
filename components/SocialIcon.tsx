import React from 'react';
import {TouchableOpacity, StyleSheet, GestureResponderEvent} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export type SocialIconProps = {
  backgroundColor: string;
  name: string;
  onPress: (event: GestureResponderEvent) => void;
};

const SocialIcon: React.FC<SocialIconProps> = ({name, backgroundColor, onPress}) => {
  return (
    <TouchableOpacity style={[styles.iconContainer, {backgroundColor}]} onPress={onPress}>
      <Icon name={name} size={30} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center', 
  },
});

export default SocialIcon;