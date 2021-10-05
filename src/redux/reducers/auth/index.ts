import {AuthActionType} from '../../action-types';
import {AuthAction} from '../../actions/index';
import {AuthStates} from '../../../Constants';

export const authReducer = (state: string = AuthStates.NoAuth, action: AuthAction): string => {
  switch (action.type) {
    case AuthActionType.SIGNIN:
      return action.payload;
    case AuthActionType.SIGNOUT:
      return AuthStates.NoAuth;
    case AuthActionType.LOGGING:
      return AuthStates.Logging;
    default:
      return state;
  }
};
