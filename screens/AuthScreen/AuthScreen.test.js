import {render} from '@testing-library/react-native';
import AuthScreen from './AuthScreen';

describe('AuthScreen', () => {
  it('Should display Logo', () => {
    const {getByTestId} = render(<AuthScreen />);
    const logo = getByTestId('Logo');
    expect(logo).toBeTruthy();
  });
  it('Should display the logo text', () => {
    const {getByText} = render(<AuthScreen />);
    const logoText = getByText('REAL MEET');
    expect(logoText).toBeTruthy();
  });
});
