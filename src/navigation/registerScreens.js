// @flow

import React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  WelcomeScreen,
  LoginScreen,
  SingleAppScreen,
  Tab1Screen,
  Tab2Screen
} from 'src/screens';
import { Start } from 'src/screens/Start';
import { Songs } from 'src/screens/Songs';
import { Provider } from 'src/redux';

import {
  WELCOME_SCREEN,
  LOGIN_SCREEN,
  SINGLE_APP_SCREEN,
  TAB1_SCREEN,
  TAB2_SCREEN,
  SONGS,
  START
} from './Screens';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider>
        <Component {...props} />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(WELCOME_SCREEN, () => WrappedComponent(WelcomeScreen));
  Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(LoginScreen));
  Navigation.registerComponent(SINGLE_APP_SCREEN, () => WrappedComponent(SingleAppScreen));
  Navigation.registerComponent(TAB1_SCREEN, () => WrappedComponent(Tab1Screen));
  Navigation.registerComponent(TAB2_SCREEN, () => WrappedComponent(Tab2Screen));
  Navigation.registerComponent(SONGS, () => WrappedComponent(Songs));
  Navigation.registerComponent(START, () => WrappedComponent(Start));
  console.info('All screens have been registered...');
}
