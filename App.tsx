import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './src/navigators/Stack';

const App = () => {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle="dark-content" />
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
