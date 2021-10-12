import React from 'react';
import {Image, FlatList, Dimensions, Platform} from 'react-native';
import styled from 'styled-components/native';
import {Header} from '../../сomponents/Header';
import {ScreenContainer} from '../../сomponents/ScreenContainer';
import {CardTypes} from '../../Constants';
import {AccountsOverviewCardProps} from '../../сomponents/AccountsOverviewCard';
import {GreetingByDateIndicator} from '../../сomponents/GreetingByDateIndicator';
import {GoodnessCardProps} from '../../сomponents/GoodnessCard';

import HeartLogo from '../../assets/images/logo.png';
export type HomeViewProps = {userFirstName: string} & {
  cards: Array<
    (AccountsOverviewCardProps | GoodnessCardProps) & {type: CardTypes}
  >;
} & {
  renderFlatListItem: ({item}) => JSX.Element;
  onItemsChanged: ({changedItems}) => void;
};

const {height} = Dimensions.get('window');

const HomeViewFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingBottom: Platform.OS === 'android' ? 20 : height / 4,
  },
})`
  margin-horizontal: ${({theme}) => theme.spaces[1]};
`;

export const HomeView: React.FC<HomeViewProps> = ({
  userFirstName,
  cards,
  renderFlatListItem,
  onItemsChanged,
}) => {
  return (
    <ScreenContainer>
      <Header>
        <Image source={HeartLogo} />
      </Header>
      <HomeViewFlatList
        pagingEnabled={false}
        onViewableItemsChanged={onItemsChanged}
        ListHeaderComponent={
          <GreetingByDateIndicator userFirstName={userFirstName} />
        }
        data={cards}
        renderItem={item => renderFlatListItem(item)}></HomeViewFlatList>
    </ScreenContainer>
  );
};
