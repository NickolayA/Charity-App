import {AuthActionType} from '../action-types';

interface SignInAction {
  type: AuthActionType.SIGNIN;
  payload: string;
}

interface SignOutAction {
  type: AuthActionType.SIGNOUT;
}

interface LoggingAction {
  type: AuthActionType.LOGGING;
}

export type AuthAction = SignInAction | SignOutAction | LoggingAction;
