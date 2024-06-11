import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Singup';
import Signin from './src/screens/auth/Singin';

const App = () => {
  return (
    <SafeAreaView>
      <Signin />
    </SafeAreaView>
  );
};

export default App;
