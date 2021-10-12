import React from 'react';
import {Platform, View, Modal, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const VideoPlayerFullScreenBG = styled(View)`
  background-color: ${({theme}) => theme.colors.bg.black};
  flex: 1;
`;

const VideoScreen = styled(Video)`
  min-height: 207px;
  flex: 1;
`;

const ControlButtonsWrapper = styled.View`
  flex: 0.07;
  background-color: ${({theme}) => theme.colors.bg.black};
`;

const AudioControlButton = styled(Icon)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${({theme}) => theme.colors.icons.primary};
`;

const FullScreenControlButton = styled(Icon)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: ${({theme}) => theme.colors.icons.primary};
`;

type VideoPlayerProps = {
  muted: boolean;
  setMuted: (fn: (muted: boolean) => boolean) => boolean;
  fullScreen: boolean;
  setFullScreen: (fullScreen: boolean) => boolean;
};

export const VideoPlayerAndroid: React.FC<VideoPlayerProps> = props => {
  if (props.fullScreen) {
    return (
      <Modal>
        <ControlButtonsWrapper>
          <TouchableOpacity
            style={{borderColor: 'green', borderWidth: 2, width: 20}}
            onPress={() => props.setMuted(muted => !muted)}>
            <AudioControlButton
              name={props.muted ? 'volume-mute-outline' : 'volume-high-outline'}
              size={30}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.setFullScreen(false);
            }}>
            <FullScreenControlButton
              name="close-outline"
              size={30}></FullScreenControlButton>
          </TouchableOpacity>
        </ControlButtonsWrapper>

        <VideoPlayerFullScreenBG>
          <VideoScreen {...props} />
        </VideoPlayerFullScreenBG>
      </Modal>
    );
  } else {
    return <VideoScreen {...props} />;
  }
};
