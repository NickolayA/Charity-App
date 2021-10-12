import React, {useRef, useState} from 'react';
import {ImageSourcePropType, Image, TouchableOpacity} from 'react-native';
import Video, {VideoProperties} from 'react-native-video';
import styled from 'styled-components/native';
import {CardSourceTypes} from '../../Constants';

export interface CardMainImageProps {
  image: ImageSourcePropType;
  video?: string;
  sourceType: CardSourceTypes;
  paused?: boolean;
}

import PlayIcon from '../../assets/images/play.png';

const TouchableVideoDynamic = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 2;
`;

export const CardMainImage: React.FC<CardMainImageProps> = ({
  image,
  video,
  sourceType,
  paused,
}) => {
  const [mute, setMute] = useState<boolean>(true);
  let videoRef = useRef<Video>();

  return sourceType === CardSourceTypes.Image ? (
    <Image source={image} />
  ) : (
    <TouchableOpacity
      onPress={() => {
        videoRef.presentFullscreenPlayer();
      }}>
      <TouchableVideoDynamic onPress={() => setMute(mute => !mute)}>
        <Image source={PlayIcon} width={10} height={10} />
      </TouchableVideoDynamic>
      <Video
        source={video}
        style={{height: 207}}
        ref={ref => {
          videoRef = ref;
        }}
        muted={mute}
        paused={paused}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};
