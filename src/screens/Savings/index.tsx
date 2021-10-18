import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from 'styled-components/native';
import {ScreenContainerModel} from '../../models/ScreenContainerModel';
import {SavingAccountDataItem} from '../../services/saving-account';
import {Theme} from '../../theme';
import {SavingsView} from './SavingsView';
import {savingAccountService} from '../../services/saving-account';
import {CardRow} from '../../сomponents/CardRow';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {State} from '../../redux/reducers';
import {useDispatch, useSelector} from 'react-redux';
import {TransactionsByDate} from '../../services/saving-account';
import {searchByInputSavingAccountActionCreator} from '../../redux/action-creators';

const transactionsByDate = savingAccountService.getTransactionsPerDate();

export const SavingsContainer: React.FC<ScreenContainerModel> = ({route}) => {
  const theme = useContext<Theme>(ThemeContext);
  const specialDepositColor = theme.colors.text.special;

  const transactionsByDate = useSelector<State, TransactionsByDate>(
    state => state.savingAccount,
  );

  const dispatch = useDispatch();

  const filterByInput = (input: string) =>
    dispatch(searchByInputSavingAccountActionCreator(input));

  const renderFlatListItem = ({
    item,
  }: {
    item: {date: string; transactions: Array<SavingAccountDataItem>};
  }): JSX.Element => {
    const transactionsCount = item.transactions.length;

    return (
      <View>
        <CardRow
          title={'End day balance - ' + item.date}
          amount={5000.0}
          showChevron={false}
          textSize={12}
        />
        <Divider />
        {item.transactions.map((t, index) => {
          return (
            <View>
              {
                <CardRow
                  key={t.depositType + index}
                  title={t.depositType}
                  subtitle={t.date}
                  amount={t.amount}
                  titleColor={specialDepositColor}
                  amountColor={specialDepositColor}
                  showChevron={false}
                />
              }
              {index < transactionsCount - 1 && <Divider />}
            </View>
          );
        })}
      </View>
    );
  };

  const screenSubtitle = route.params.saving.subtitle;
  return (
    <SavingsView
      screenTitle={route.name}
      screenSubtitle={screenSubtitle}
      totalAvailableCash={savingAccountService.totalAvailableCash}
      totalInterest={savingAccountService.totalInterest}
      goodnessPoints={savingAccountService.goodnessPoints}
      transactions={transactionsByDate}
      renderFlatListItem={renderFlatListItem}
      filterHandler={filterByInput}
    />
  );
};
