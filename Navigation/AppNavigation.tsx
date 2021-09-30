import React, {useContext} from 'react';
import type {Theme} from '../Theme';
import styled, {ThemeContext} from 'styled-components/native';
import {Image as Icon, Platform} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {BlurView} from '@react-native-community/blur';
import {HomeScreen} from '../Screens/HomeScreen';
import {AccountsScreen} from '../Screens/AccountsScreen';
import {GivingScreen} from '../Screens/GivingScreen';
import {PaymentsScreen} from '../Screens/PaymentsScreen';
import {CardsScreen} from '../Screens/CardsScreen';

const AccountIcon = require('../Assets/Images/accounts.png');
const CardsIcon = require('../Assets/Images/cards.png');
const GivingIcon = require('../Assets/Images/giving.png');
const HomeIcon = require('../Assets/Images/home.png');
const PaymentIcon = require('../Assets/Images/payment.png');

const AccountActiveIcon = require('../Assets/Images/accounts_filled.png');
const CardsActiveIcon = require('../Assets/Images/cards_filled.png');
const GivingActiveIcon = require('../Assets/Images/giving_filled.png');
const HomeActiveIcon = require('../Assets/Images/home_filled.png');
const PaymentActiveIcon = require('../Assets/Images/payment_filled.png');

const tabNameIcon: {[key: string]: {active: any; inactive: any}} = {
  Home: {active: HomeActiveIcon, inactive: HomeIcon},
  Accounts: {active: AccountActiveIcon, inactive: AccountIcon},
  Giving: {active: GivingActiveIcon, inactive: GivingIcon},
  Payments: {active: PaymentActiveIcon, inactive: PaymentIcon},
  Cards: {active: CardsActiveIcon, inactive: CardsIcon},
};

const BlurredBottomTabBarWrapper = styled(BlurView)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

const createScreenOptions = ({route}): BottomTabNavigationOptions => {
  const theme = useContext<Theme>(ThemeContext);
  const icon = tabNameIcon[route.name];

  return {
    tabBarIcon: ({focused}) => {
      return focused ? (
        <Icon source={icon.active} />
      ) : (
        <Icon source={icon.inactive} />
      );
    },
    tabBarActiveTintColor: theme.colors.icons.active,
    tabBarStyle: {
      borderTopColor: '#666666',
      backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'white',
      paddingBottom: 30,
      height: 80,
    },
    headerShown: false,
  };
};

const Tab = createBottomTabNavigator();

export const AppNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={createScreenOptions}
      backBehavior="initialRoute"
      tabBar={props => {
        return Platform.OS === 'ios' ? (
          <BlurredBottomTabBarWrapper
            blurType="light"
            blurAmount={10}
            blurRadius={10}>
            <BottomTabBar {...props} />
          </BlurredBottomTabBarWrapper>
        ) : (
          <BottomTabBar {...props} />
        );
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen name="Giving" component={GivingScreen} />
      <Tab.Screen name="Payments" component={PaymentsScreen} />
      <Tab.Screen name="Cards" component={CardsScreen} />
    </Tab.Navigator>
  );
};
