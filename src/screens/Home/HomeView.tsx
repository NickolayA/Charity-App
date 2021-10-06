import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../сomponents/Header';
import { ScreenContainer } from '../../сomponents/ScreenContainer';
import { AccountsOverviewCard } from '../../сomponents/AccountsOverviewCard';
import { GoodnessCard } from '../../сomponents/GoodnessCard';

import HeartLogo from '../../assets/images/logo.png';

export const HomeView: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <ScreenContainer>
      <Header>
        <Image source={HeartLogo} />
      </Header>
      <GoodnessCard />
    </ScreenContainer>
  );
};
