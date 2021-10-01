import React from 'react';
import {ScreenContainerModel} from '../../models/ScreenContainerModel';
import {CheckingView} from './CheckingView';

export const CheckingContainer: React.FC<ScreenContainerModel> = ({route}) => {
  const screenSubtitle = route.params.checking.subtitle;

  return (
    <CheckingView screenTitle={route.name} screenSubtitle={screenSubtitle} />
  );
};
