import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {UserAvatar} from '../UserAvatar';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {RouteNames} from '../../Constants';
import {useTimeBlockedCallback} from '../../hooks/useTimeBlockedCallback';

import HamburgerMenuIcon from '../../assets/images/burgerMenuIcon.png';
import BackButtonIcon from '../../assets/images/back.png';
import {useDispatch} from 'react-redux';
import {pauseAllActionCreator} from '../../redux/action-creators';

const HeaderWrapper = styled(View)`
  background-color: ${({theme}) => theme.colors.bg.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${({theme}) => parseInt(theme.spaces[1]) + 5}px;
  padding-vertical: ${({theme}) => theme.spaces[2]};
  height: 55px;
`;

const ScreenControlWrapper = styled(TouchableOpacity).attrs({
  hitSlop: {left: 4, right: 4, top: 4, bottom: 4},
})`
  flex: 1;
  align-items: flex-start;
`;

const ChildrenWrapper = styled.View`
  flex: 1;
  align-items: center;
  text-align: center;
`;

const AvatarWrapper = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const Header: React.FC<{onExitRoute?: () => void}> = ({
  onExitRoute,
  children,
}) => {
  const navigation = useNavigation();
  const route = useRoute();

  const navigationGoBack = useTimeBlockedCallback(() => navigation.goBack());

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      dispatch(pauseAllActionCreator());
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <HeaderWrapper>
      {route.name === RouteNames.Home ? (
        <ScreenControlWrapper>
          <Image source={HamburgerMenuIcon} />
        </ScreenControlWrapper>
      ) : (
        <ScreenControlWrapper
          onPress={() => {
            onExitRoute && onExitRoute();
            navigationGoBack();
          }}>
          <Image source={BackButtonIcon} />
        </ScreenControlWrapper>
      )}
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <AvatarWrapper>
        <UserAvatar />
      </AvatarWrapper>
    </HeaderWrapper>
  );
};
