import React, {useState} from 'react';
import {TouchableWithoutFeedback, Modal, View, Platform} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {signOutActionCreator} from '../../redux/action-creators';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {useNavigation} from '@react-navigation/core';
import {RouteNames} from '../../Constants';

import AvatarIcon from '../../assets/images/oval.png';

const UserMenuOverlay = styled(View)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const UserMenuContent = styled(ListItem)`
  position: absolute;
  top: ${Platform.OS === 'ios' ? 90 : 55}px;
  right: 10px;
  width: 100px;
`;

export const UserAvatar: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const hideUserMenu = () => {
    setUserMenuVisible(false);
  };
  const showUserMenu = () => {
    setUserMenuVisible(true);
  };

  return (
    <View>
      <Avatar rounded source={AvatarIcon} onPress={showUserMenu} />
      <Modal visible={userMenuVisible} transparent>
        <TouchableWithoutFeedback onPress={hideUserMenu}>
          <UserMenuOverlay />
        </TouchableWithoutFeedback>
        <UserMenuContent>
          <ListItem.Content>
            <ListItem.Title
              onPress={() => {
                navigation.navigate(RouteNames.Profile);
                hideUserMenu();
              }}>
              Profile
            </ListItem.Title>
            <ListItem.Title onPress={() => dispatch(signOutActionCreator())}>
              Log out
            </ListItem.Title>
          </ListItem.Content>
        </UserMenuContent>
      </Modal>
    </View>
  );
};
