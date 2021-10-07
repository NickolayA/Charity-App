import React from 'react';
import {StatusBar, Platform, SafeAreaView} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './src/theme';
import {Navigator} from './src/navigation';
import {Provider} from 'react-redux';
import {persistedStore, store} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';

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
        <PersistGate persistor={persistedStore}>
          <Provider store={store}>
            <Navigator />
          </Provider>
        </PersistGate>
      </SafeAreaTop>
      <SafeAreaBottom />
    </ThemeProvider>
  );
};

export default App;
