import React, {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import {theme} from './src/theme';
import {Navigator} from './src/navigation';
import {Provider} from 'react-redux';
import {persistedStore, store} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SafeAreaTop = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.bg.primary};
`;

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor={theme.colors.bg.primary} />
      )}
      <SafeAreaTop edges={['top']}>
        <PersistGate persistor={persistedStore}>
          <Provider store={store}>
            <Navigator />
          </Provider>
        </PersistGate>
      </SafeAreaTop>
    </ThemeProvider>
  );
};

export default App;
