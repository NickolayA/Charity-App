import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CheckingContainer} from '../screens/Checking';
import {SavingsContainer} from '../screens/Savings';
import {AppNavigation} from './AppNavigation';

import {RouteNames} from '../Constants';

const Stack = createStackNavigator();

export const AccountsOverviewNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteNames.Home} component={AppNavigation} />
      <Stack.Screen name={RouteNames.Checking} component={CheckingContainer} />
      <Stack.Screen name={RouteNames.Savings} component={SavingsContainer} />
    </Stack.Navigator>
  );
};
