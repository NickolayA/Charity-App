import {AuthActionType, ProfileActionType, VideoCardsType} from '../action-types';

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

interface PlayAction {
  type: VideoCardsType.PLAY;
  payload: number;
}

interface PauseAction {
  type: VideoCardsType.PAUSE;
  payload: number;
}

export type VideoCardsAction = PlayAction | PauseAction;

interface UpdateAction {
  type: ProfileActionType.UPDATE;
  payload: object;
}

export type ProfileAction = UpdateAction;