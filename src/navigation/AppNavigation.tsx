import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurredBottomTabBar} from '../сomponents/BlurredBottomTabBar';
import {createAppNavigationScreenOptions} from './options/appNavigationOptions';

import {RouteNames} from '../Constants';

import {HomeContainer} from '../screens/Home';
import {AccountsContainer} from '../screens/Accounts';
import {GivingContainer} from '../screens/Giving';
import {PaymentsContainer} from '../screens/Payments';
import {CardsContainer} from '../screens/Cards';

const Tab = createBottomTabNavigator();

export const AppNavigation: React.FC = () => {
  // TODO change initial route name to Home route
  return (
    <Tab.Navigator
      initialRouteName={RouteNames.Profile}
      screenOptions={createAppNavigationScreenOptions}
      backBehavior="initialRoute"
      tabBar={props => <BlurredBottomTabBar bottomTabBarProps={props} />}>
      <Tab.Screen name={RouteNames.Home} component={HomeContainer} />
      <Tab.Screen name={RouteNames.Accounts} component={AccountsContainer} />
      <Tab.Screen name={RouteNames.Giving} component={GivingContainer} />
      <Tab.Screen name={RouteNames.Payments} component={PaymentsContainer} />
      <Tab.Screen name={RouteNames.Cards} component={CardsContainer} />
    </Tab.Navigator>
  );
};
