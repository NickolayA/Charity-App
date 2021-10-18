import {
  AuthActionType,
  CheckingAccountActionType,
  ProfileActionType,
  SavingAccountActionType,
  VideoCardsType,
} from '../action-types';

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

interface SearchByBusinessNameAction {
  type: CheckingAccountActionType.SEARCH_BY_INPUT;
  payload: string;
}

export type CheckingAccountAction = SearchByBusinessNameAction;

interface SearchByInputAction {
  type: SavingAccountActionType.SEARCH_BY_INPUT;
  payload: string;
}

export type SavingAccountAction = SearchByInputAction;
