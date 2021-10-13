import React from 'react';
import {Platform} from 'react-native';
import {BottomTabBar, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import {BlurView} from '@react-native-community/blur';

interface BlurredBottomTabBarProps {
  blurType?: string;
  blurAmount?: number;
  blurRadius?: number;
  bottomTabBarProps: BottomTabBarProps;
}

const BlurredBottomTabBarWrapper = styled(BlurView)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

export const BlurredBottomTabBar: React.FC<BlurredBottomTabBarProps> = ({
  blurType = 'light',
  blurAmount = 10,
  blurRadius = 10,
  bottomTabBarProps,
}) => {
  return Platform.OS === 'ios' ? (
    <BlurredBottomTabBarWrapper
      blurType={blurType}
      blurAmount={blurAmount}
      blurRadius={blurRadius}>
      <BottomTabBar {...bottomTabBarProps} />
    </BlurredBottomTabBarWrapper>
  ) : (
    <BottomTabBar {...bottomTabBarProps} />
  );
};
