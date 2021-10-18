import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components/native';
import {View, FlatList, Dimensions, Text} from 'react-native';
import {Header} from '../../сomponents/Header';
import {ScreenContainer} from '../../сomponents/ScreenContainer';
import {ScreenTitle} from '../../сomponents/ScreenTitle';
import {ScreenSubtitle} from '../../сomponents/ScreenSubtitle';
import {ViewWrapper} from '../../сomponents/ViewWrapper';
import {ScreenViewModel} from '../../models/ScreenViewModel';
import {CardHeader} from '../../сomponents/CardHeader';

import SavingsGraph from '../../assets/images/savingsGraphV2.png';
import {SearchSection} from '../../сomponents/SearchSection';
import {CardWrapper} from '../../сomponents/CardWrapper';
import {
  SavingAccountDataItem,
  TransactionsByDate,
} from '../../services/saving-account';
import {Divider} from 'react-native-elements';
import {FontFamilyVariants} from '../../Constants';
import {CardRow} from '../../сomponents/CardRow';
import {Theme} from '../../theme';

export type SavingsViewProps = ScreenViewModel & {
  totalAvailableCash: number;
  totalInterest: number;
  goodnessPoints: number;
  transactions: TransactionsByDate;
  filterHandler: (name: string) => void;
};

const ChartWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.bg.secondary};
`;

const GraphImage = styled.Image`
  align-self: flex-end;
  margin-bottom: ${({theme}) => theme.spaces[1]};
`;

const AdditionalInfoWrapper = styled.View`
  margin-horizontal: ${({theme}) => theme.spaces[2]}
  margin-top: ${({theme}) => theme.spaces[1]};
`;

const AdditionalInfoTextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({theme}) => theme.spaces[0]};
`;

const AdditionalInfoText = styled.Text`
  font-family: ${FontFamilyVariants.Light};
`;

const AdditionalInfoSpecialText = styled.Text`
  font-family: ${FontFamilyVariants.Regular};
  color: ${({theme}) => theme.colors.text.special};
`;

const {height} = Dimensions.get('screen');

const SavingsViewFlatList = styled(FlatList).attrs(({theme}) => ({
  contentContainerStyle: {
    paddingBottom: height / 1.28,
  },
}))``;

const renderFlatListItem =
  (specialDepositColor: string) =>
  ({
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

export const SavingsView: React.FC<SavingsViewProps> = ({
  screenTitle,
  screenSubtitle,
  totalAvailableCash,
  totalInterest,
  goodnessPoints,
  transactions,
  filterHandler,
}) => {
  const theme = useContext<Theme>(ThemeContext);
  const specialDepositColor = theme.colors.text.special;

  return (
    <ScreenContainer>
      <Header>
        <View>
          <ScreenTitle>{screenTitle}</ScreenTitle>
          {screenSubtitle && <ScreenSubtitle>{screenSubtitle}</ScreenSubtitle>}
        </View>
      </Header>
      <ChartWrapper>
        <CardHeader
          amount={totalAvailableCash}
          subtitle="Total available cash"
        />
        <GraphImage source={SavingsGraph} />
      </ChartWrapper>
      <ViewWrapper>
        <AdditionalInfoWrapper>
          <AdditionalInfoTextWrapper>
            <AdditionalInfoText>Total interest gained</AdditionalInfoText>
            <AdditionalInfoSpecialText>{`+\$${totalInterest.toFixed(
              2,
            )}`}</AdditionalInfoSpecialText>
          </AdditionalInfoTextWrapper>
          <AdditionalInfoTextWrapper>
            <AdditionalInfoText>Goodness points Gained</AdditionalInfoText>
            <AdditionalInfoSpecialText>{`+${goodnessPoints}`}</AdditionalInfoSpecialText>
          </AdditionalInfoTextWrapper>
        </AdditionalInfoWrapper>
        <SearchSection inputHandler={filterHandler} />
        <CardWrapper>
          <SavingsViewFlatList
            data={transactions}
            renderItem={renderFlatListItem(specialDepositColor)}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Divider />}
          />
        </CardWrapper>
      </ViewWrapper>
    </ScreenContainer>
  );
};
