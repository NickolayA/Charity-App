import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {TopBar} from '../Navigation/Components/TopBar';
import {ScreenWrapper} from './Styling/ScreenWrapper';
import {ScreenModel} from '../Models/ScreenModel';

const HeartLogo = require('../Assets/Images/logo.png');

export const HomeScreen: React.FC<ScreenModel> = ({navigation, route}) => {
  return (
    <>
      <TopBar route={route}>
        <Image source={HeartLogo} />
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
