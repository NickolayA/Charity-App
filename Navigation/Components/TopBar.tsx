import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {UserAvatar} from './UserAvatar';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

interface TopBarProps {
  navigation?: any;
  route: any;
  options?: any;
}

const HamburgerMenuIcon = require('../../Assets/Images/burgerMenuIcon.png');
const BackButtonIcon = require('../../Assets/Images/back.png');

const TopBarWrapper = styled(View)`
  background-color: ${({theme}) => theme.colors.bg.primary};
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${({theme}) => theme.spaces[0]};
  padding-bottom: ${({theme}) => theme.spaces[0]};
`;

const ScreenControlWrapper = styled(TouchableOpacity)`
  align-self: center;
`;

export const TopBar: React.FC<TopBarProps> = ({route, children}) => {
  const navigation = useNavigation();
  return (
    <TopBarWrapper>
      {route.name === 'Home' ? (
        <ScreenControlWrapper>
          <Image source={HamburgerMenuIcon} />
        </ScreenControlWrapper>
      ) : (
        <ScreenControlWrapper onPress={() => navigation.goBack()}>
          <Image source={BackButtonIcon} />
        </ScreenControlWrapper>
      )}
      {children}
      <UserAvatar />
    </TopBarWrapper>
  );
};
