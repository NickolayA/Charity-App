import React from 'react';
import { AppNavigation } from './AppNavigation';
import { AccountsOverviewNavigation } from './AccountsOverviewNavigation';
import {NavigationContainer} from '@react-navigation/native';

export const Navigation: React.FC = () => {
  return <NavigationContainer><AccountsOverviewNavigation /></NavigationContainer>
};
