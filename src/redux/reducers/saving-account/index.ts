import {SavingAccountActionType} from '../../action-types'
import {SavingAccountAction} from '../../actions'
import {
	savingAccountService,
} from '../../../services/saving-account'
import {TransactionsByDate} from '../../../services/saving-account'

export const savingAccountReducer = (
	state = savingAccountService.getTransactionsPerDate(),
	action: SavingAccountAction,
): TransactionsByDate => {
	switch (action.type) {
	case SavingAccountActionType.SEARCH_BY_INPUT:
		return savingAccountService.getTransactionsPerDate(
			savingAccountService.filterTransactionsByInput(action.payload),
		)
	default:
		return state
	}
}
