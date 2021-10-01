import React from 'react';
import {ScreenContainerModel} from '../../models/ScreenContainerModel';
import {SavingsView} from './SavingsView';

export const SavingsContainer: React.FC<ScreenContainerModel> = ({route}) => {
  const screenSubtitle = route.params.saving.subtitle;
  return (
    <SavingsView screenTitle={route.name} screenSubtitle={screenSubtitle} />
  );
};
