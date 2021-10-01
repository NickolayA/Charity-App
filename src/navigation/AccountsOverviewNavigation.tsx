import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CheckingScreen} from '../screens/Checking';
import {SavingsScreen} from '../screens/Savings';
import {AppNavigation} from './AppNavigation';

import {RouteNames} from '../Constants';

const Stack = createStackNavigator();

export const AccountsOverviewNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteNames.Home} component={AppNavigation} />
      <Stack.Screen name={RouteNames.Checking} component={CheckingScreen} />
      <Stack.Screen name={RouteNames.Savings} component={SavingsScreen} />
    </Stack.Navigator>
  );
};
