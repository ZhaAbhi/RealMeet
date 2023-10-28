import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import MapView from 'react-native-maps';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 27.700001,
          longitude: 85.333336,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.searchContainer}>
        <TextInput
          testID="searchBar"
          placeholder="Find mate around you"
          style={styles.searchBar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: '10%',
    left: 0,
    right: 0,
    padding: 20,
  },
  searchBar: {
    backgroundColor: 'white',
    paddingLeft: 15,
    padding: 10,
    borderRadius: 25,
    color: 'grey',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
});

export default HomeScreen;
