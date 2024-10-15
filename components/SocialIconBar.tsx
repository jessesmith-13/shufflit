import React from 'react';
import {View, StyleSheet, GestureResponderEvent} from 'react-native';
import SocialIcon from './SocialIcon';

interface SocialIconBarProps {
  icons: Array<{ name: string; backgroundColor: string; onPress: (event: GestureResponderEvent) => void }>;
}

const SocialIconBar: React.FC<SocialIconBarProps> = ({icons}) => {
  return (
    <View style={styles.barContainer}>
      {icons.map((icon, index) => (
        <SocialIcon
          key={index}
          name={icon.name}
          backgroundColor={icon.backgroundColor}
          onPress={icon.onPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: 200
  },
});

export default SocialIconBar