import React, {useState} from 'react';
import {TouchableWithoutFeedback, Modal, View, Platform} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import styled from 'styled-components/native';

import AvatarIcon from '../assets/images/oval.png';

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

interface UserAvatarProps {
  signOut: () => void;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({signOut}) => {
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
            <ListItem.Title onPress={signOut}>Log out</ListItem.Title>
          </ListItem.Content>
        </UserMenuContent>
      </Modal>
    </View>
  );
};
