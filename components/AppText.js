import React from 'react';
import {StyleSheet, Text} from 'react-native';

const AppText = ({title, style}) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
});

export default AppText;
