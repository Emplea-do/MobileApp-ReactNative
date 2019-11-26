import React from 'react';
import {StatusBar} from 'react-native';

import Navigation from './navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </>
  );
};

export default App;
