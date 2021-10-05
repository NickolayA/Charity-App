import React from 'react';
import {SignInView} from './SignInView';
import {signInService} from '../../services/auth';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../redux/action-creators';
import {State} from '../../redux/reducers';

export const SignInContainer = () => {
  const dispatch = useDispatch();
  const authState = useSelector<State, string>(state => state.auth);

  return (
    <SignInView
      onSignIn={(email: string, password: string) =>
        dispatch(signIn(email, password, signInService))
      }
      authState={authState}
    />
  );
};
