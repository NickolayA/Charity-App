import React, {useContext} from 'react';
import {View} from 'react-native';
import styled, {ThemeContext} from 'styled-components/native';
import {ScreenContainerModel} from '../../models/ScreenContainerModel';
import {CheckingView} from './CheckingView';
import {FontFamilyVariants, TransactionTypes} from '../../Constants';
import {CheckingAccountDataItem} from '../../services/checking-account';
import {checkingAccountService} from '../../services/checking-account';
import {CardRow} from '../../сomponents/CardRow';
import {Theme} from '../../theme';
import {CardWrapper} from '../../сomponents/CardWrapper';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {State} from '../../redux/reducers';
import {useSelector, useDispatch} from 'react-redux';

import {searchByInputCheckingAccountActionCreator} from '../../redux/action-creators';

import SpecialDepositIcon from '../../assets/images/confetti2.png';

const getSubtitle = (paymentMethod: string, location?: string): string => {
  if (location) {
    return location + ' | ' + paymentMethod;
  } else {
    return paymentMethod;
  }
};

const getTransactionRow = (item, specialDepositColor: string) => {
  switch (item.transactionType) {
    case TransactionTypes.Withdraw:
      return (
        <CardRow
          title={item.business}
          subtitle={getSubtitle(item.paymentMethod, item.location)}
          amount={item.amount}
          showChevron={false}
        />
      );
    case TransactionTypes.Deposit:
      return (
        <CardRow
          title={item.business}
          subtitle={getSubtitle(item.paymentMethod, item.location)}
          amount={item.amount}
          showChevron={false}
          titleColor={specialDepositColor}
          amountColor={specialDepositColor}
        />
      );
    case TransactionTypes.SpecialDeposit:
      return (
        <CardRow
          title={item.business}
          subtitle={getSubtitle(item.paymentMethod, item.location)}
          amount={item.amount}
          showChevron={false}
          titleColor={specialDepositColor}
          subtitleColor={specialDepositColor}
          amountColor={specialDepositColor}
          leftSideIcon={SpecialDepositIcon}
        />
      );
  }
};

const TransactionDate = styled.Text`
  margin-left: ${({theme}) => theme.spaces[1]};
  margin-bottom: ${({theme}) => theme.spaces[0]};
  font-family: ${FontFamilyVariants.Regular};
`;

export const CheckingContainer: React.FC<ScreenContainerModel> = ({route}) => {
  const theme = useContext<Theme>(ThemeContext);
  const specialDepositColor = theme.colors.text.special;

  const checkingAccountState = useSelector<
    State,
    Array<CheckingAccountDataItem>
  >(state => state.checkingAccount);
  const transactionsByDate =
    checkingAccountService.getTransactionsPerDate(checkingAccountState);

  const dispatch = useDispatch();

  const filterByInput = (input: string) =>
    dispatch(searchByInputCheckingAccountActionCreator(input));

  const renderFlatListItem = ({
    item,
  }: {
    item: {date: string; transactions: Array<CheckingAccountDataItem>};
  }): JSX.Element => {
    const transactionsCount = item.transactions.length;

    return (
      <View>
        <TransactionDate>{item.date}</TransactionDate>
        <CardWrapper>
          {item.transactions.map((t, index) => {
            return (
              <View>
                {getTransactionRow(t, specialDepositColor)}
                {index < transactionsCount - 1 && <Divider />}
              </View>
            );
          })}
        </CardWrapper>
      </View>
    );
  };

  const screenSubtitle = route.params.checking.subtitle;

  return (
    <CheckingView
      screenTitle={route.name}
      screenSubtitle={screenSubtitle}
      totalAvailableCash={checkingAccountService.totalAvailableCash}
      transactions={transactionsByDate}
      renderFlatListItem={renderFlatListItem}
      filterHandler={filterByInput}
    />
  );
};
