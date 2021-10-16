import {
  CheckingAccountDataItem,
  checkingAccountService,
} from '../../../services/checking-account';
import {CheckingAccountActionType} from '../../action-types';
import {CheckingAccountAction} from '../../actions';

export const checkingAccountReducer = (
  state = checkingAccountService.transactions,
  action: CheckingAccountAction,
): Array<CheckingAccountDataItem> => {
  switch (action.type) {
    case CheckingAccountActionType.SEARCH_BY_INPUT:
      return checkingAccountService.filterTransactionsByInput(
        action.payload,
        checkingAccountService.transactions,
      );
    default:
      return state;
  }
};
