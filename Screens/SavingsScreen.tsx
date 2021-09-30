import React from 'react';
import {View} from 'react-native';
import {TopBar} from '../Navigation/Components/TopBar';
import {ScreenTitle} from './Styling/ScreenTitle';
import {ScreenSubtitle} from './Styling/ScreenSubtitle';
import {ScreenModel} from '../Models/ScreenModel';

export const SavingsScreen: React.FC<ScreenModel> = ({route}) => {
  const topBarSubtitle = route.params.saving.subtitle;

  return (
    <TopBar route={route}>
      <View>
        <ScreenTitle>{route.name}</ScreenTitle>
        {topBarSubtitle && <ScreenSubtitle>{topBarSubtitle}</ScreenSubtitle>}
      </View>
    </TopBar>
  );
};
