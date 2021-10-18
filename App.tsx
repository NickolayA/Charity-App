import React, {useEffect, useState} from 'react';
import {StatusBar, Platform, View} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import {theme} from './src/theme';
import {Navigator} from './src/navigation';
import {Provider} from 'react-redux';
import {persistedStore, store} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnimatedSplash from 'react-native-animated-splash-screen';

import SplashScreenLogo from './src/assets/images/logo_splash_screen.png';

export const SafeAreaTop = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.bg.primary};
`;

const App = () => {
  const [appLoaded, setAppLoaded] = useState<boolean>(false);
  const hideSplashScreen = () => setAppLoaded(true);

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor={theme.colors.bg.primary} />
      )}
      <AnimatedSplash
        backgroundColor={theme.colors.bg.primary}
        logoImage={SplashScreenLogo}
        isLoaded={appLoaded}
        translucent={true}
        disableBackgroundImage={true}>
        <SafeAreaTop edges={['top']}>
          <PersistGate persistor={persistedStore}>
            <Provider store={store}>
              <Navigator onRouteLoad={hideSplashScreen} />
            </Provider>
          </PersistGate>
        </SafeAreaTop>
      </AnimatedSplash>
    </ThemeProvider>
  );
};

export default App;
