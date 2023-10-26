import {render} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  it('Should display the text', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText('Hello HomeScreen')).toBeTruthy();
  });
});
