/**
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/routes/StackNav';
import ContextProvider from './src/utils/ContextAPI';

function App() {

  return (
    <ContextProvider>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;