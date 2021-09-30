import React, {useState} from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
  View,
  Platform,
} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';

const AvatarIcon = require('../../Assets/Images/oval.png');

export const UserAvatar: React.FC = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const hideUserMenu = () => {
    setUserMenuVisible(false);
  };
  const showUserMenu = () => {
    setUserMenuVisible(true);
  };

  return (
    <>
      <Avatar rounded source={AvatarIcon} onPress={showUserMenu} />
      <Modal visible={userMenuVisible} transparent>
        <TouchableWithoutFeedback onPress={hideUserMenu}>
          <View style={styles.userMenuOverlay} />
        </TouchableWithoutFeedback>
        <ListItem style={styles.userMenuContent}>
          <ListItem.Content>
            <ListItem.Title>Log out</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  userMenuContent: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 55,
    right: 10,
    width: 100,
  },
  userMenuOverlay: StyleSheet.absoluteFillObject,
});
