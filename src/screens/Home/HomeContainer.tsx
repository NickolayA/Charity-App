import React from 'react';
import {ScreenContainerModel} from '../../models/ScreenContainerModel';
import {HomeView} from './HomeView';

export const HomeContainer: React.FC<ScreenContainerModel> = ({navigation}) => {
  return <HomeView navigation={navigation} />;
};
