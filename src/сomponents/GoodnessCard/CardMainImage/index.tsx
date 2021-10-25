import React, {useRef, useState} from 'react'
import {
	ImageSourcePropType,
	Image,
	TouchableOpacity,
	Platform,
} from 'react-native'
import Video from 'react-native-video'
import {VideoPlayerAndroid} from '../../VideoPlayerAndroid'
import styled from 'styled-components/native'
import {CardSourceTypes} from '../../../Constants'

export interface CardMainImageProps {
  image: ImageSourcePropType;
  video?: string;
  sourceType: CardSourceTypes;
  paused?: boolean;
  cardIndex?: number;
}

import PlayIcon from '../../../assets/images/play.png'

const TouchableVideoDynamic = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 2;
`

const CardVideo = styled(Video)`
  height: 207px;
`

const CardImage = styled(Image)`
  width: 100%;
`

export const CardMainImage: React.FC<CardMainImageProps> = ({
	image,
	video,
	sourceType,
	paused,
}) => {

	const [muted, setMuted] = useState<boolean>(true)
	const [fullScreen, setFullScreen] = useState<boolean>(false)
	const [controls, setControls] = useState<boolean>(false)

	const mute = () => setMuted(mute => !mute)
	const hideFullScreen = () => setFullScreen(true)

	let videoRef = useRef<Video>()

	return sourceType === CardSourceTypes.Image ? (
		<CardImage source={image} />
	) : (
		<TouchableOpacity
			onPress={() => {
				if (Platform.OS === 'android') {
					setFullScreen(true)
					setControls(true)
				} else {
					(videoRef as unknown as Video).presentFullscreenPlayer()
				}
			}}>
			<TouchableVideoDynamic onPress={() => setMuted(muted => !muted)}>
				<Image source={PlayIcon} width={10} height={10} />
			</TouchableVideoDynamic>

			{Platform.OS === 'ios' ? (
				<CardVideo
					source={video}
					setMuted={setMuted}
					muted={muted}
					paused={paused}
					resizeMode="contain"
					repeat={true}
					showPoster={true}
					ref={ref => (videoRef = ref)}
					onFullscreenPlayerWillDismiss={() => {				
						if (!paused) {
							videoRef.setNativeProps({paused})
						} 
					}}
				/>
			) : (
				<VideoPlayerAndroid
					source={video}
					mute={mute}
					fullScreen={fullScreen}
					setFullScreen={hideFullScreen}
					controls={controls}
					muted={muted}
					paused={paused}
					resizeMode="contain"
				/>
			)}
		</TouchableOpacity>
	)
}
