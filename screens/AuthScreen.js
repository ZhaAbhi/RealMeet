import React from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import RMLOGO from '../assets/RM-LOGO.png';

const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={RMLOGO} style={styles.logo} />
        <Text style={styles.logoText}>REAL MEET</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 200,
  },
  logoText: {
    letterSpacing: 10,
    marginLeft: 10,
    color: '#000',
  },
});

export default AuthScreen;
