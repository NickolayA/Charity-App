import React from 'react'
import {useSelector} from 'react-redux'
import {CardTypes} from '../../Constants'
import {ScreenContainerModel} from '../../models/ScreenContainerModel'
import {State} from '../../redux/reducers'
import {AccountsOverviewCardProps} from '../../сomponents/AccountsOverviewCard'
import {AccountsView} from './AccountsView'

import CircleButtonSendIcon from '../../assets/images/circleButtonSend.png'
import CircleButtonPayIcon from '../../assets/images/circleButtonPay.png'
import CircleButtonCheckingIcon from '../../assets/images/circleButtonChecking.png'
import {MoneyActionButtonProps} from '../../сomponents/MoneyActionButton'

const circleButtons: Array<MoneyActionButtonProps> = [
	{icon: CircleButtonSendIcon, subtitle: 'Send'},
	{icon: CircleButtonPayIcon, subtitle: 'Pay'},
	{icon: CircleButtonCheckingIcon, subtitle: 'Transfer'},
]

export const AccountsContainer: React.FC<ScreenContainerModel> = ({route}) => {
	const accountsData = useSelector<State, AccountsOverviewCardProps>(state =>
		state.cards.find(card => card.type === CardTypes.AccountsOverviewCard)
	)

	return (
		<AccountsView
			screenTitle={route.name}
			data={accountsData}
			circleButtonsData={circleButtons}
		/>
	)
}
