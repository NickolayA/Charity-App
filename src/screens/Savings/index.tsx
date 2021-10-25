import React from 'react'
import {ScreenContainerModel} from '../../models/ScreenContainerModel'
import {SavingsView} from './SavingsView'
import {savingAccountService} from '../../services/saving-account'
import {State} from '../../redux/reducers'
import {useDispatch, useSelector} from 'react-redux'
import {TransactionsByDate} from '../../services/saving-account'
import {searchByInputSavingAccountActionCreator} from '../../redux/action-creators'

export const SavingsContainer: React.FC<ScreenContainerModel> = ({route}) => {
	const transactionsByDate = useSelector<State, TransactionsByDate>(
		state => state.savingAccount,
	)

	const dispatch = useDispatch()

	const filterByInput = (input: string) =>
		dispatch(searchByInputSavingAccountActionCreator(input))

	const onExitRoute = () => filterByInput('')

	const screenSubtitle = route.params.saving.subtitle
	return (
		<SavingsView
			screenTitle={route.name}
			screenSubtitle={screenSubtitle}
			onExitRoute={onExitRoute}
			totalAvailableCash={savingAccountService.totalAvailableCash}
			totalInterest={savingAccountService.totalInterest}
			goodnessPoints={savingAccountService.goodnessPoints}
			transactions={transactionsByDate}
			filterHandler={filterByInput}
		/>
	)
}
