import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import RMLogo from '../../assets/RM.svg';
import RMIllustration from '../../assets/RM-ILLUSTRATION.svg';
import GoogleLogo from '../../assets/google-icon.svg';
import {colors} from '../../config/colors';
import AppButton from '../../components/AppButton';

const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <RMLogo testID="RMLogo" height="130" width="80%" />
      </View>
      <View style={styles.illustration}>
        <RMIllustration testID="RMIllustration" height="250" width="100%" />
      </View>
      <View style={styles.desContainer}>
        <Text style={styles.des}>Your Platform to Connect with</Text>
        <Text style={styles.des}>Right Mate Around You!</Text>
      </View>
      <AppButton
        testID="button"
        buttonTitle="Continue with Google"
        buttonIcon={<GoogleLogo height="40" width="40" />}
        buttonStyle={{flexDirection: 'row'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbeb',
  },
  logoContainer: {
    alignItems: 'center',
  },
  illustration: {
    alignItems: 'center',
  },
  desContainer: {
    padding: 10,
    marginTop: '10%',
    alignItems: 'center',
  },
  des: {
    color: colors.secondary,
    letterSpacing: 0.3,
    fontSize: 20,
  },
});

export default AuthScreen;
