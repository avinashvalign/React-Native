import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, style, textStyle, borderColor }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, style, borderColor && { borderColor, borderWidth: 1 }]} 
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#44ff00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 0, // Default border width
  },
  buttonText: {
    color: '#032F35',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Button;
