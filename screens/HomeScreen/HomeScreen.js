import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import AppText from '../../components/AppText';
import MapView from 'react-native-maps';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{height: '45%', width: '100%'}}
        initialRegion={{
          latitude: 27.700001,
          longitude: 85.333336,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <AppText title="Hello HomeScreen" />
    </View>
  );
};

export default HomeScreen;
