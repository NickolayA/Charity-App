import {AuthActionType} from '../action-types';
import {Dispatch} from 'redux';
import {AuthAction} from '../actions';

export const signIn = (
  email: string,
  password: string,
  signInService: (email: string, password: string) => Promise<string>,
) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({type: AuthActionType.LOGGING});
    const res = await signInService(email, password);
    dispatch({type: AuthActionType.SIGNIN, payload: res});
  };
};

export const signOut = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({type: AuthActionType.SIGNOUT});
  };
};
