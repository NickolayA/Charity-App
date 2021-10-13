import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScreenContainerModel} from '../../models/ScreenContainerModel';
import {updateProfileDataActionCreator} from '../../redux/action-creators';
import {State} from '../../redux/reducers';
import {ProfileType} from '../../redux/reducers/profile';
import {ProfileView} from './ProfileView';

export const ProfileContainer: React.FC<ScreenContainerModel> = ({route}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const activateEditMode = (): void => setEditMode(true);
  const deactivateEditMode = (): void => setEditMode(false);

  const profileState = useSelector<State, ProfileType>(state => state.profile);
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState<any>(profileState.avatar);
  const [fullName, setFullName] = useState<string>(profileState.fullName);
  const [dateOfBirth, setDateOfBirth] = useState<number>(profileState.dateOfBirth);

  const changeDateOfBirth = (newDate: Date) =>
    setDateOfBirth(newDate.getTime());

  const updateProfileData = () =>
    dispatch(
      updateProfileDataActionCreator({
        avatar,
        fullName,
        dateOfBirth,
      }),
    );

  return (
    <ProfileView
      screenTitle={route.name}
      data={{avatar, fullName, dateOfBirth}}
      isEditMode={editMode}
      activateEditMode={activateEditMode}
      deactivateEditMode={deactivateEditMode}
      setAvatar={setAvatar}
      setFullName={setFullName}
      changeDateOfBirth={changeDateOfBirth}
      onApplyUpdates={() => {
        deactivateEditMode();
        updateProfileData();
      }}
    />
  );
};
