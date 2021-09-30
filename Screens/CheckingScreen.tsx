import React from 'react';
import {View} from 'react-native';
import {TopBar} from '../Navigation/Components/TopBar';
import {ScreenTitle} from './Styling/ScreenTitle';
import {ScreenSubtitle} from './Styling/ScreenSubtitle';
import {ScreenModel} from '../Models/ScreenModel';

export const CheckingScreen: React.FC<ScreenModel> = ({route}) => {
  const topBarSubtitle = route.params.checking.subtitle;

  return (
    <TopBar route={route}>
      <View>
        <ScreenTitle>{route.name}</ScreenTitle>
        {topBarSubtitle && <ScreenSubtitle>{topBarSubtitle}</ScreenSubtitle>}
      </View>
    </TopBar>
  );
};
