import React from 'react';
import {StatusBar, Platform, SafeAreaView} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './src/theme';
import {Navigation} from './src/navigation';

export const SafeAreaTop = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.bg.primary};
`;

export const SafeAreaBottom = styled(SafeAreaView)`
  flex: 0;
`;

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
