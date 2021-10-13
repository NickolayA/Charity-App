import React, {useState} from 'react';
import {useCamera} from 'react-native-camera-hooks';
import {useDispatch, useSelector} from 'react-redux';
import {ScreenContainerModel} from '../../models/ScreenContainerModel';
import {updateProfileDataActionCreator} from '../../redux/action-creators';
import {State} from '../../redux/reducers';
import {ProfileType} from '../../redux/reducers/profile';
import {ProfileView} from './ProfileView';
import DocumentPicker from 'react-native-document-picker';

export const ProfileContainer: React.FC<ScreenContainerModel> = ({route}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const activateEditMode = (): void => setEditMode(true);
  const deactivateEditMode = (): void => setEditMode(false);

  const profileState = useSelector<State, ProfileType>(state => state.profile);
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState<any>(profileState.avatar);
  const changeAvatarFromFileSystem = async (): Promise<void> => {
    try {
      const selectedImage = await DocumentPicker.pickSingle({
        type: DocumentPicker.types.images,
        mode: 'open',
      });
      setAvatar(selectedImage.uri);
    } catch (err) {
      console.log(err);
    }
  };

  const changeAvatarFromCamera = async (): Promise<void> => {
    try {
      const res = await takePicture({
        pauseAfterCapture: false,
        doNotSave: false,
      });
      setAvatar(res.uri);
    } finally {
      hideCamera();
    }
  };

  const [fullName, setFullName] = useState<string>(profileState.fullName);
  const [dateOfBirth, setDateOfBirth] = useState<number>(
    profileState.dateOfBirth,
  );

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

  const revertBackState = () => {
    setAvatar(profileState.avatar);
    setFullName(profileState.fullName);
    setDateOfBirth(profileState.dateOfBirth);
  };

  const [{cameraRef}, {takePicture}] = useCamera();
  const [showCamera, setShowCamera] = useState<boolean>(false);

  const hideCamera = () => setShowCamera(false);
  const revealCamera = () => setShowCamera(true);

  return (
    <ProfileView
      screenTitle={route.name}
      data={profileState}
      isEditMode={editMode}
      activateEditMode={activateEditMode}
      deactivateEditMode={deactivateEditMode}
      changeAvatarFromFileSystem={changeAvatarFromFileSystem}
      changeAvatarFromCamera={changeAvatarFromCamera}
      avatar={avatar}
      fullName={fullName}
      setFullName={setFullName}
      dateOfBirth={dateOfBirth}
      changeDateOfBirth={changeDateOfBirth}
      onApplyUpdates={() => {
        deactivateEditMode();
        updateProfileData();
      }}
      onDiscardUpdates={() => {
        deactivateEditMode();
        revertBackState();
      }}
      cameraRef={cameraRef}
      showCamera={showCamera}
      revealCamera={revealCamera}
    />
  );
};
