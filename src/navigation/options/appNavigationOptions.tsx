import React, {useContext} from 'react';
import type {Theme} from '../../theme';
import {ThemeContext} from 'styled-components/native';
import {Image as Icon, Platform} from 'react-native';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

import AccountIcon from '../../assets/images/accounts.png';
import CardsIcon from '../../assets/images/cards.png';
import GivingIcon from '../../assets/images/giving.png';
import HomeIcon from '../../assets/images/home.png';
import PaymentIcon from '../../assets/images/payment.png';

import AccountActiveIcon from '../../assets/images/accounts_filled.png';
import CardsActiveIcon from '../../assets/images/cards_filled.png';
import GivingActiveIcon from '../../assets/images/giving_filled.png';
import HomeActiveIcon from '../../assets/images/home_filled.png';
import PaymentActiveIcon from '../../assets/images/payment_filled.png';

const tabNameIcon: {[key: string]: {active: any; inactive: any}} = {
  Home: {active: HomeActiveIcon, inactive: HomeIcon},
  Accounts: {active: AccountActiveIcon, inactive: AccountIcon},
  Giving: {active: GivingActiveIcon, inactive: GivingIcon},
  Payments: {active: PaymentActiveIcon, inactive: PaymentIcon},
  Cards: {active: CardsActiveIcon, inactive: CardsIcon},
};

export const createAppNavigationScreenOptions = ({
  route,
}): BottomTabNavigationOptions => {
  const theme = useContext<Theme>(ThemeContext);
  const icon = tabNameIcon[route.name];

  return {
    tabBarIcon: ({focused}) => {
      return focused ? (
        <Icon
          source={icon.active}
          style={{tintColor: theme.colors.icons.active}}
        />
      ) : (
        <Icon source={icon.inactive} />
      );
    },
    tabBarActiveTintColor: theme.colors.icons.active,
    tabBarStyle: {
      borderTopColor: '#666666',
      backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'white',
      paddingBottom: 20,
      height: 70,
    },
    headerShown: false,
  };
};
