import React from 'react'
import {TouchableWithoutFeedback, View, Modal} from 'react-native'
import Video from 'react-native-video'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

const VideoPlayerFullScreenBG = styled(View)`
  background-color: ${({theme}) => theme.colors.bg.black};
  flex: 1;
`

const VideoScreen = styled(Video)`
  min-height: 207px;
  flex: 1;
`

const ControlButtonsWrapper = styled.View`
  flex: 0.08;
  background-color: ${({theme}) => theme.colors.bg.black};
`

const AudioControlButton = styled(Icon)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${({theme}) => theme.colors.icons.primary};
`

const FullScreenControlButton = styled(Icon)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: ${({theme}) => theme.colors.icons.primary};
`

type VideoPlayerProps = {
  source: string;
  muted: boolean;
  mute: () => void;
  fullScreen: boolean;
  setFullScreen: () => void;
  controls: boolean;
  paused: boolean;
  resizeMode: string;
};

export const VideoPlayerAndroid: React.FC<VideoPlayerProps> = props => {
	if (props.fullScreen) {
		return (
			<Modal>
				<ControlButtonsWrapper>
					<TouchableWithoutFeedback
						onPress={() => props.mute}>
						<AudioControlButton
							name={props.muted ? 'volume-mute-outline' : 'volume-high-outline'}
							size={30}
						/>
					</TouchableWithoutFeedback>

					<TouchableWithoutFeedback
						onPress={() => {
							props.setFullScreen()
						}}>
						<FullScreenControlButton
							name="close-outline"
							size={30}></FullScreenControlButton>
					</TouchableWithoutFeedback>
				</ControlButtonsWrapper>

				<VideoPlayerFullScreenBG>
					<VideoScreen {...props} />
				</VideoPlayerFullScreenBG>
			</Modal>
		)
	} else {
		return <VideoScreen {...props} />
	}
}
