import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {TopBar} from '../Navigation/Components/TopBar';
import {ScreenModel} from '../Models/ScreenModel';
import {ScreenWrapper} from './Styling/ScreenWrapper';
import {ScreenTitle} from './Styling/ScreenTitle';

export const AccountsScreen: React.FC<ScreenModel> = ({route, navigation}) => {
  return (
    <>
      <TopBar route={route}>
        <ScreenTitle>{route.name}</ScreenTitle>
      </TopBar>
      <ScreenWrapper>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Checking', {
              checking: {
                subtitle: 'Checking Subtitle',
              },
            })
          }>
          <Text>Go to Checking screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Savings', {
              saving: {
                subtitle: 'Saving Subtitle',
              },
            })
          }>
          <Text>Go to Saving screen</Text>
        </TouchableOpacity>
      </ScreenWrapper>
    </>
  );
};
