import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../сomponents/Header';
import { ScreenContainer } from '../../сomponents/ScreenContainer';
import {ScreenWrapper} from '../../сomponents/ScreenWrapper';

import HeartLogo from '../../assets/images/logo.png';

export const HomeView: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <ScreenContainer>
      <Header>
        <Image source={HeartLogo} />
      </Header>
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
    </ScreenContainer>
  );
};
