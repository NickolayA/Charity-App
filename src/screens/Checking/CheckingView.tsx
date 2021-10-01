import React from 'react';
import {View} from 'react-native';
import {Header} from '../../сomponents/Header';
import {ScreenTitle} from '../../сomponents/ScreenTitle';
import {ScreenSubtitle} from '../../сomponents/ScreenSubtitle';
import {ScreenViewModel} from '../../models/ScreenViewModel';

export const CheckingView: React.FC<ScreenViewModel> = ({screenTitle, screenSubtitle}) => {
  return (
    <Header>
      <View>
        <ScreenTitle>{screenTitle}</ScreenTitle>
        {screenSubtitle && <ScreenSubtitle>{screenSubtitle}</ScreenSubtitle>}
      </View>
    </Header>
  );
};
