import React from 'react';

import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import MainNavigator from './navigations/RootNavigator';

const App = () => {
  return (
    <PaperProvider>
      <MainNavigator />
    </PaperProvider>
  );
};

export default App;
