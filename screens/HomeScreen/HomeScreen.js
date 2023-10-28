import React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import MapView from 'react-native-maps';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 27.700001,
          longitude: 85.333336,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: '10%',
          left: 0,
          right: 0,
          padding: 20,
        }}>
        <TextInput
          testID="searchBar"
          placeholder="Find mate around you"
          style={{
            backgroundColor: 'white',
            paddingLeft: 15,
            padding: 10,
            borderRadius: 25,
            color: 'grey',
            fontSize: 16,
            fontFamily: 'Roboto-Medium',
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
