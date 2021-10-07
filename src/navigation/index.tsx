import React from 'react';
import {AccountsOverviewNavigation} from './AccountsOverviewNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SignInContainer} from '../screens/SignIn';
import {useSelector} from 'react-redux';
import {State} from '../redux/reducers';
import {AuthStates} from '../Constants';

export const Navigator: React.FC = () => {
  const authState = useSelector<State, string>(state => state.auth);

  return (
    <NavigationContainer>
      {authState === AuthStates.AuthFail || authState === AuthStates.NoAuth || authState === AuthStates.Logging ? (
        <SignInContainer />
      ) : (
        <AccountsOverviewNavigation />
      )}
    </NavigationContainer>
  );
};
