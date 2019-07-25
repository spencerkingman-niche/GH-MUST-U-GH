

import React from 'react';
import { Navigation } from 'react-native-navigation';

import { Start } from 'src/screens/Start';
import { Song } from 'src/screens/Song';
import { Songs } from 'src/screens/Songs';
import { Provider } from 'src/redux';

import {
  SONG,
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
  Navigation.registerComponent(SONG, () => WrappedComponent(Song));
  Navigation.registerComponent(SONGS, () => WrappedComponent(Songs));
  Navigation.registerComponent(START, () => WrappedComponent(Start));
  console.info('All screens have been registered...');
}
