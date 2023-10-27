import {render, cleanup} from '@testing-library/react-native';
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
describe('HomeScreen', () => {
  it('Should display the text above map', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText('Find Your Right Mate')).toBeTruthy();
  });
  it('Should render map', () => {
    const {getByTestId, debug} = render(<HomeScreen />);
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
