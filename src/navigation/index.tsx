import React from 'react';
import {AccountsOverviewNavigation} from './AccountsOverviewNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SignInContainer} from '../screens/SignIn';
import {useSelector} from 'react-redux';
import {State} from '../redux/reducers';
import {AuthStates} from '../Constants';
import { NavigationTheme } from './options/navigationContainerTheme';

export const Navigator: React.FC = () => {
  const authState = useSelector<State, string>(state => state.auth);

  return (
    <NavigationContainer theme={NavigationTheme}>
      {authState === AuthStates.AuthFail || authState === AuthStates.NoAuth || authState === AuthStates.Logging ? (
        <SignInContainer />
      ) : (
        <AccountsOverviewNavigation />
      )}
    </NavigationContainer>
  );
};
