import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurredBottomTabBar} from '../сomponents/BlurredBottomTabBar';
import {createAppNavigationScreenOptions} from './options/appNavigationOptions';

import {RouteNames} from '../Constants';

import {HomeScreen} from '../screens/Home';
import {AccountsScreen} from '../screens/Accounts';
import {GivingScreen} from '../screens/Giving';
import {PaymentsScreen} from '../screens/Payments';
import {CardsScreen} from '../screens/Cards';

const Tab = createBottomTabNavigator();

export const AppNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={RouteNames.Home}
      screenOptions={createAppNavigationScreenOptions}
      backBehavior="initialRoute"
      tabBar={props => <BlurredBottomTabBar bottomTabBarProps={props} />}>
      <Tab.Screen name={RouteNames.Home} component={HomeScreen} />
      <Tab.Screen name={RouteNames.Accounts} component={AccountsScreen} />
      <Tab.Screen name={RouteNames.Giving} component={GivingScreen} />
      <Tab.Screen name={RouteNames.Payments} component={PaymentsScreen} />
      <Tab.Screen name={RouteNames.Cards} component={CardsScreen} />
    </Tab.Navigator>
  );
};
