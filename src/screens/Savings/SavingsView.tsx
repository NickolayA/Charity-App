import React from 'react';
import styled from 'styled-components/native';
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
import {TransactionsByDate} from '../../services/saving-account';
import {Divider} from 'react-native-elements';
import {FontFamilyVariants} from '../../Constants';

export type SavingsViewProps = ScreenViewModel & {
  totalAvailableCash: number;
  totalInterest: number;
  goodnessPoints: number;
  transactions: TransactionsByDate;
  renderFlatListItem: ({item}) => JSX.Element;
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

export const SavingsView: React.FC<SavingsViewProps> = ({
  screenTitle,
  screenSubtitle,
  totalAvailableCash,
  totalInterest,
  goodnessPoints,
  transactions,
  renderFlatListItem,
  filterHandler,
}) => {
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
            renderItem={renderFlatListItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Divider />}
          />
        </CardWrapper>
      </ViewWrapper>
    </ScreenContainer>
  );
};
