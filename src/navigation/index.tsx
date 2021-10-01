import React from 'react';
import {AccountsOverviewNavigation} from './AccountsOverviewNavigation';
import {NavigationContainer} from '@react-navigation/native';

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AccountsOverviewNavigation />
    </NavigationContainer>
  );
};
