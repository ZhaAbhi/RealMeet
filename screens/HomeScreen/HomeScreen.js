import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import MapView from 'react-native-maps';
import LocationPin from 'react-native-vector-icons/EvilIcons';
import MicroPhone from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-vector-icons/AntDesign';

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
        <View style={styles.searchInputContainer}>
          <LocationPin name="location" size={30} style={styles.locationIcon} />

          <TextInput
            testID="searchBar"
            placeholder="Find mate around you"
            style={styles.searchBar}
          />
          <View style={styles.ms}>
            <MicroPhone name="microphone" size={23} style={styles.microPhone} />
            <Search name="search1" size={23} style={styles.search} />
          </View>
        </View>
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
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
  },
  locationIcon: {
    padding: 10,
    fontFamily: 'Roboto-Medium',
    color: 'grey',
  },
  searchBar: {
    flex: 1,
    color: 'grey',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  ms: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  microPhone: {
    marginRight: 8,
    color: 'grey',
  },
  search: {
    color: 'grey',
  },
});

export default HomeScreen;
