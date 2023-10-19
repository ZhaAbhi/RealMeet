import React from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import RMLOGO from '../../assets/RM.svg';
import RMIllustration from '../../assets/RM-ILLUSTRATION.svg'
import GoogleLogo from "../../assets/google-icon.svg"
import { colors } from '../../config/colors';
const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <RMLOGO height="130" width="80%" />
      </View>
      <View style={{alignItems:"center"}}>
      <RMIllustration height="250" width="100%"/>
      </View>
      <View style={{padding:5}}>
      <Text style={{color:colors.secondary, letterSpacing:0.3, fontSize:17}}>Your Platform to Connect with</Text>
      <Text style={{color:colors.secondary, letterSpacing:0.3, fontSize:17}}>Right Mate Around You!</Text>
      </View>
      <View style={{backgroundColor:"lightgrey", padding:3, margin:50, borderRadius:30, justifyContent:"center", alignItems:"center" }}>
        <TouchableOpacity style={{ alignItems:"center", flexDirection:"row", justifyContent:"center"}}>
         <GoogleLogo height="40" width="40"/>
         <Text style={{fontSize:17, marginLeft:5, color:colors.secondary}}>Continue with Google</Text>
        </TouchableOpacity>
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
});

export default AuthScreen;
