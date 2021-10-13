import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {Avatar, Button, Input} from 'react-native-elements';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {ScreenViewModel} from '../../models/ScreenViewModel';
import {ProfileType} from '../../redux/reducers/profile';
import {Header} from '../../сomponents/Header';
import {ScreenContainer} from '../../сomponents/ScreenContainer';
import {ScreenTitle} from '../../сomponents/ScreenTitle';
import {FontFamilyVariants} from '../../Constants';

type ProfileViewProps = ScreenViewModel & {
  data: ProfileType;
  isEditMode: boolean;
  activateEditMode: () => void;
  deactivateEditMode: () => void;
  setAvatar: any;
  fullName: string;
  setFullName: any;
  changeDateOfBirth: any;
  onApplyUpdates: any;
};

const {width} = Dimensions.get('window');

const ProfileViewWrapper = styled.View`
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

const DataWrapper = styled.View`
  flex: 0.7;
  justify-content: space-between;
  align-items: center;
`;

const AvatarWrapper = styled.View`
  align-self: center;
`;

const DataLabel = styled.Text`
  font-family: ${FontFamilyVariants.Regular};
  font-size: ${({theme}) => theme.sizes[2]};
`;

const DataItem = DataLabel;

const ProfileViewButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const ProfileViewRow = styled.View`
  align-items: center;
  width: ${width / 1.2}px;
`;

const ProfileViewButton = styled(Button).attrs(({theme}) => ({
  containerStyle: {width: '40%', borderRadius: parseInt(theme.sizes[1])},
  titleStyle: {
    fontFamily: FontFamilyVariants.Regular,
  },
  buttonStyle: {
    backgroundColor: theme.colors.bg.primary,
  },
}))``;

export const ProfileView: React.FC<ProfileViewProps> = ({
  screenTitle,
  data,
  isEditMode,
  activateEditMode,
  deactivateEditMode,
  setAvatar,
  setFullName,
  changeDateOfBirth,
  onApplyUpdates
}) => {
  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>{screenTitle}</ScreenTitle>
      </Header>
      <ProfileViewWrapper>
        <DataWrapper>
          <AvatarWrapper>
            <Avatar source={data.avatar} size={150} />
          </AvatarWrapper>
          <ProfileViewRow>
            <DataLabel>Full name: </DataLabel>
            {isEditMode ? (
              <Input placeholder="Full name" onChangeText={setFullName} value={data.fullName}/>
            ) : (
              <DataItem>{data.fullName}</DataItem>
            )}
          </ProfileViewRow>
          <ProfileViewRow>
            <DataLabel>Date Of Birth: </DataLabel>
            {isEditMode ? (
              <DatePicker
                mode="date"
                date={moment(data.dateOfBirth).toDate()}
                onDateChange={changeDateOfBirth}
              />
            ) : (
              <DataItem>{moment(data.dateOfBirth).format('LL')}</DataItem>
            )}
          </ProfileViewRow>
        </DataWrapper>
        {!isEditMode ? (
          <ProfileViewButtonsWrapper>
            <ProfileViewButton
              title="Edit profile"
              onPress={activateEditMode}
            />
          </ProfileViewButtonsWrapper>
        ) : (
          <ProfileViewButtonsWrapper>
            <ProfileViewButton
              title="Apply updates"
              onPress={onApplyUpdates}
            />
            <ProfileViewButton title="Cancel" onPress={deactivateEditMode} />
          </ProfileViewButtonsWrapper>
        )}
      </ProfileViewWrapper>
    </ScreenContainer>
  );
};
