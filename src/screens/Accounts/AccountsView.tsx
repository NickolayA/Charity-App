import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Header} from '../../сomponents/Header';
import {ScreenViewModel} from '../../models/ScreenViewModel';
import {ScreenWrapper} from '../../сomponents/ScreenWrapper';
import {ScreenTitle} from '../../сomponents/ScreenTitle';
import { ScreenContainer } from '../../сomponents/ScreenContainer';

export const AccountsView: React.FC<ScreenViewModel & {navigation: any}> = ({screenTitle, navigation}) => {
  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>{screenTitle}</ScreenTitle>
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
