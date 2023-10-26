import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import AuthScreen from './AuthScreen';

jest.mock('../../assets/RM.svg', () => 'RMLogo');
jest.mock('../../assets/RM-ILLUSTRATION.svg', () => 'RMIllustration');
jest.mock('../../assets/google-icon.svg', () => 'GoogleLogo');
jest.mock('../../components/AppButton', () => 'AppButton');

describe('AuthScreen component', () => {
  it('Should have logo', () => {
    const {getByTestId} = render(<AuthScreen />);
    const RMLogo = getByTestId('RMLogo');
    expect(RMLogo).toBeTruthy();
  });
  it('Should have Svg Illustration', () => {
    const {getByTestId} = render(<AuthScreen />);
    const RMIllustration = getByTestId('RMIllustration');
    expect(RMIllustration).toBeTruthy();
  });
  it('Should display description text one', () => {
    const {getByText} = render(<AuthScreen />);
    expect(getByText('Your Platform to Connect with')).toBeTruthy();
  });
  it('Should display description text two', () => {
    const {getByText} = render(<AuthScreen />);
    expect(getByText('Right Mate Around You!')).toBeTruthy();
  });
  it('Should have signup button', () => {
    const {getByTestId, debug} = render(<AuthScreen />);
    const button = getByTestId('button');
    expect(button).toHaveProp('buttonTitle', 'Continue with Google');
    expect(button).toHaveProp('buttonIcon');
  });
});
