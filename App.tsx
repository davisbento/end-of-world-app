import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import Home from './src/pages/Home';

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#000',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
