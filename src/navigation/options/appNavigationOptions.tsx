import React, {useContext} from 'react'
import type {Theme} from '../../theme'
import {ThemeContext} from 'styled-components/native'
import {Image as TabIcon, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'

import AccountIcon from '../../assets/images/accounts.png'
import CardsIcon from '../../assets/images/cards.png'
import GivingIcon from '../../assets/images/giving.png'
import HomeIcon from '../../assets/images/home.png'

import AccountActiveIcon from '../../assets/images/accounts_filled.png'
import CardsActiveIcon from '../../assets/images/cards_filled.png'
import GivingActiveIcon from '../../assets/images/giving_filled.png'
import HomeActiveIcon from '../../assets/images/home_filled.png'
import {RouteNames} from '../../Constants'

const tabNameIcon: {[key: string]: {active: unknown; inactive: unknown}} = {
	Home: {active: HomeActiveIcon, inactive: HomeIcon},
	Accounts: {active: AccountActiveIcon, inactive: AccountIcon},
	Giving: {active: GivingActiveIcon, inactive: GivingIcon},
	Payments: {active: 'cash', inactive: 'cash-outline'},
	Cards: {active: CardsActiveIcon, inactive: CardsIcon},
}

export const createAppNavigationScreenOptions = ({
	route,
}): BottomTabNavigationOptions => {
	const theme = useContext<Theme>(ThemeContext)
	const icon = tabNameIcon[route.name]

	return {
		tabBarIcon: ({focused}) => {
			return focused ? (
				route.name === RouteNames.Payments ? (
					<Icon
						name={icon.active}
						color={theme.colors.icons.active}
						size={25}
					/>
				) : (
					<TabIcon
						source={icon.active}
						style={{tintColor: theme.colors.icons.active}}
					/>
				)
			) : route.name === RouteNames.Payments ? (
				<Icon name={icon.inactive} size={25} />
			) : (
				<TabIcon source={icon.inactive} />
			)
		},
		tabBarActiveTintColor: theme.colors.icons.active,
		tabBarStyle: {
			borderTopColor: '#666666',
			backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'white',
			paddingBottom: 20,
			height: 70,
		},
		headerShown: false,
	}
}
