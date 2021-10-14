import {ProfileAction} from '../../actions';
import AvatarIcon from '../../../assets/images/oval.png';
import {ProfileActionType} from '../../action-types';

export type ProfileType = {
  avatar: typeof AvatarIcon;
  fullName: string;
  dateOfBirth: number;
};

export const profileReducer = (
  state = {avatar: AvatarIcon, fullName: 'user', dateOfBirth: Date.now()},
  action: ProfileAction,
): ProfileType => {
  switch (action.type) {
    case ProfileActionType.UPDATE:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
