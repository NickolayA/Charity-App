import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {Header} from '../../сomponents/Header';
import {ScreenTitle} from '../../сomponents/ScreenTitle';
import {ScreenSubtitle} from '../../сomponents/ScreenSubtitle';
import {ScreenViewModel} from '../../models/ScreenViewModel';
import {CardHeader} from '../../сomponents/CardHeader';
import {ScreenContainer} from '../../сomponents/ScreenContainer';
import {SearchSection} from '../../сomponents/SearchSection';
import {CardWrapper} from '../../сomponents/CardWrapper';
import {
  TransactionsByDate,
} from '../../services/checking-account';

export type CheckingViewProps = ScreenViewModel & {
  totalAvailableCash: number;
  transactions: TransactionsByDate;
  renderFlatListItem: ({item}) => JSX.Element;
  filterHandler: (name: string) => void; 
};

const CheckingViewWrapper = styled.View`
  margin-horizontal: ${({theme}) => theme.spaces[1]};
`;

const CheckingViewFlatList = styled(FlatList).attrs(({theme}) => ({
  contentContainerStyle: {
    backgroundColor: theme.colors.bg.navigation,
    paddingBottom: height / 2,
  },
}))`
  background-color: ${({theme}) => theme.colors.bg.navigation};
`;

const {height} = Dimensions.get('window');

export const CheckingView: React.FC<CheckingViewProps> = ({
  screenTitle,
  screenSubtitle,
  totalAvailableCash,
  transactions,
  renderFlatListItem,
  filterHandler
}) => {
  return (
    <ScreenContainer>
      <Header>
        <View>
          <ScreenTitle>{screenTitle}</ScreenTitle>
          {screenSubtitle && <ScreenSubtitle>{screenSubtitle}</ScreenSubtitle>}
        </View>
      </Header>
      <CheckingViewWrapper>
        <CardHeader
          amount={totalAvailableCash}
          subtitle={'Total available cash'}
        />
        <SearchSection inputHandler={filterHandler}/>
        <CardWrapper>
          <CheckingViewFlatList
            data={transactions}
            renderItem={renderFlatListItem}
            showsVerticalScrollIndicator={false}
          />
        </CardWrapper>
      </CheckingViewWrapper>
    </ScreenContainer>
  );
};
