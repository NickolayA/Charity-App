import React from 'react';
import {CheckingScreen} from '../Screens/CheckingScreen';
import {SavingsScreen} from '../Screens/SavingsScreen';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {AppNavigation} from './AppNavigation';

const createScreenOptions = (): StackNavigationOptions => {
  return {
    headerShown: false,
  };
};

const Stack = createStackNavigator();

export const AccountsOverviewNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={createScreenOptions}>
      <Stack.Screen name="Home" component={AppNavigation} />
      <Stack.Screen name="Checking" component={CheckingScreen} />
      <Stack.Screen name="Savings" component={SavingsScreen} />
    </Stack.Navigator>
  );
};
