/**
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/routes/StackNav';

function App(): React.JSX.Element {

  return (
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
  );
}

export default App;