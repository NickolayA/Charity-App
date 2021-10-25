import React, { LegacyRef } from 'react'
import {Dimensions, Modal} from 'react-native'
import styled from 'styled-components/native'
import {Avatar, Button, Input} from 'react-native-elements'
import moment from 'moment'
import DatePicker from 'react-native-date-picker'
import {ScreenViewModel} from '../../models/ScreenViewModel'
import {ProfileType} from '../../redux/reducers/profile'
import {Header} from '../../сomponents/Header'
import {ScreenContainer} from '../../сomponents/ScreenContainer'
import {ScreenTitle} from '../../сomponents/ScreenTitle'
import {FontFamilyVariants} from '../../Constants'
import {RNCamera} from 'react-native-camera'

import Icon from 'react-native-vector-icons/Ionicons'

type ProfileViewProps = ScreenViewModel & {
  data: ProfileType;
  isEditMode: boolean;
  activateEditMode: () => void;
  deactivateEditMode: () => void;
  changeAvatarFromFileSystem: () => Promise<void>;
  changeAvatarFromCamera: () => Promise<void>;
  avatar: string;
  fullName: string;
  setFullName: (newName: string) => void;
  dateOfBirth: number;
  changeDateOfBirth: (newDate: Date) => void;
  onApplyUpdates: () => void;
  onDiscardUpdates: () => void;
  cameraRef: LegacyRef<RNCamera>;
  showCamera: boolean;
  revealCamera: () => void;
};

const {width} = Dimensions.get('window')

const ProfileViewWrapper = styled.View`
  justify-content: space-around;
  align-items: center;
  flex: 1;
`

const DataWrapper = styled.View`
  flex: 0.7;
  justify-content: space-between;
  align-items: center;
`

const AvatarWrapper = styled.View`
  align-self: center;
  align-items: center;
`

const DataLabel = styled.Text`
  font-family: ${FontFamilyVariants.Regular};
  font-size: ${({theme}) => theme.sizes[2]};
`

const DataItem = DataLabel

const ProfileViewButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-vertical: ${({theme}) => theme.spaces[1]};
`

const ProfileViewButton = styled(Button).attrs(({theme}) => ({
	containerStyle: {
		width: '40%',
		borderRadius: parseInt(theme.sizes[1]),
		margin: 0,
	},
	titleStyle: {
		fontFamily: FontFamilyVariants.Regular,
	},
	buttonStyle: {
		backgroundColor: theme.colors.bg.primary,
	},
}))``

const ProfileViewRow = styled.View`
  align-items: center;
  width: ${width / 1.2}px;
`

export const ProfileView: React.FC<ProfileViewProps> = ({
	screenTitle,
	data,
	isEditMode,
	activateEditMode,
	changeAvatarFromFileSystem,
	changeAvatarFromCamera,
	avatar,
	fullName,
	setFullName,
	dateOfBirth,
	changeDateOfBirth,
	onApplyUpdates,
	onDiscardUpdates,
	cameraRef,
	showCamera,
	revealCamera,
}) => {
	return (
		<ScreenContainer>
			<Header>
				<ScreenTitle>{screenTitle}</ScreenTitle>
			</Header>
			<ProfileViewWrapper>
				<DataWrapper>
					<AvatarWrapper>
						<Avatar
							source={typeof avatar === 'number' ? avatar : {uri: avatar}}
							rounded
							size={150}
						/>
						{isEditMode && (
							<ProfileViewButtonsWrapper>
								<ProfileViewButton
									onPress={changeAvatarFromFileSystem}
									icon={<Icon name="folder-outline" color="white" size={30} />}
								/>
								<ProfileViewButton
									onPress={revealCamera}
									icon={<Icon name="camera-outline" color="white" size={30} />}
								/>
								{showCamera && (
									<Modal>
										<RNCamera
											ref={cameraRef}
											captureAudio={false}
											style={{flex: 1}}
										/>
										<ProfileViewButtonsWrapper>
											<ProfileViewButton
												icon={
													<Icon name="camera-outline" color="white" size={30} />
												}
												onPress={changeAvatarFromCamera}
											/>
										</ProfileViewButtonsWrapper>
									</Modal>
								)}
							</ProfileViewButtonsWrapper>
						)}
					</AvatarWrapper>
					<ProfileViewRow>
						<DataLabel>Full name: </DataLabel>
						{isEditMode ? (
							<Input
								placeholder="Full name"
								onChangeText={setFullName}
								value={fullName}
							/>
						) : (
							<DataItem>{data.fullName}</DataItem>
						)}
					</ProfileViewRow>
					<ProfileViewRow>
						<DataLabel>Date Of Birth: </DataLabel>
						{isEditMode ? (
							<DatePicker
								mode="date"
								date={moment(dateOfBirth).toDate()}
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
						<ProfileViewButton title="Apply updates" onPress={onApplyUpdates} />
						<ProfileViewButton title="Cancel" onPress={onDiscardUpdates} />
					</ProfileViewButtonsWrapper>
				)}
			</ProfileViewWrapper>
		</ScreenContainer>
	)
}
