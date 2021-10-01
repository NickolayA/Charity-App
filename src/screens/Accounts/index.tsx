import React from 'react';
import {ScreenContainerModel} from '../../models/ScreenContainerModel';
import {AccountsView} from './AccountsView';

export const AccountsContainer: React.FC<ScreenContainerModel> = ({route, navigation}) => {
  return <AccountsView screenTitle={route.name} navigation={navigation}/>;
};
