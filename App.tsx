import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './Theme';
import {SafeAreaTop, SafeAreaBottom} from './Components/SafeArea';
import {Navigation} from './Navigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor={theme.colors.bg.primary} />
      )}
      <SafeAreaTop>
        <Navigation />
      </SafeAreaTop>
      <SafeAreaBottom />
    </ThemeProvider>
  );
};

export default App;
