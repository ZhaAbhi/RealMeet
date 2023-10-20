import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../config/colors';

const AppButton = ({
  buttonTitle,
  buttonStyle,
  buttonTitleStyle,
  buttonColor = colors.primary,
  buttonIcon,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle, {backgroundColor: buttonColor}]}>
      {buttonIcon && buttonIcon}
      <Text style={[styles.title, buttonTitleStyle]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
    padding: 5,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    marginLeft: 5,
    color: colors.secondary,
  },
});

export default AppButton;
