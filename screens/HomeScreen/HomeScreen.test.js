import {render} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

jest.mock('react-native-maps', () => {
  const {View} = require('react-native');
  const MapViewMock = props => {
    return (
      <View
        initialRegion={{
          latitude: 27.700001,
          longitude: 85.333336,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        testID="map">
        {props.children}
      </View>
    );
  };
  return {
    __esModule: true,
    default: MapViewMock,
  };
});

jest.mock('react-native-vector-icons/EvilIcons', () => {
  const {View} = require('react-native');
  const LocationIconMock = prop => {
    return <View testID="location">{prop.children}</View>;
  };
  return {
    __esModule: true,
    default: LocationIconMock,
  };
});
describe('HomeScreen', () => {
  it('Should display the input fields', () => {
    const {getByTestId} = render(<HomeScreen />);
    const searchBar = getByTestId('searchBar');
    expect(searchBar).toBeTruthy();
  });
  it('Should have location pin to display in search bar', () => {
    const {getByTestId} = render(<HomeScreen />);
    const location = getByTestId('location');
    expect(location).toBeTruthy();
  });
  it('Should render map', () => {
    const {getByTestId} = render(<HomeScreen />);
    const map = getByTestId('map');
    expect(map).toBeTruthy();
    expect(map).toHaveProp('initialRegion', {
      latitude: 27.700001,
      longitude: 85.333336,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  });
});
