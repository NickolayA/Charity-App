import React, {useRef, useState, useEffect} from 'react';
import {ImageSourcePropType, Image, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import styled from 'styled-components/native';
import {CardSourceTypes} from '../../Constants';

export interface CardMainImageProps {
  image: ImageSourcePropType;
  video?: string;
  sourceType: CardSourceTypes;
}

import PlayIcon from '../../assets/images/play.png';

const TouchableVideoDynamic = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 2;
`;

export const CardMainImage: React.FC<CardMainImageProps> = React.forwardRef(
  ({image, video, sourceType}, ref) => {
    const [mute, setMute] = useState<boolean>(true);
    const [paused, setPaused] = useState<boolean>(true);
    let videoRef = useRef();

    return sourceType === CardSourceTypes.Image ? (
      <Image source={image} ref={el => ref.current.push(el)}/>
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
          ref={el => {
            videoRef = el;
            ref.current.push(el);
          }}
          muted={mute}
          paused={paused}
        />
      </TouchableOpacity>
    );
  },
);
