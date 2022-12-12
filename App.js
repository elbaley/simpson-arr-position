import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigations/Navigation';
import {AppContextProvider} from './src/context/AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <Navigation />
    </AppContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
