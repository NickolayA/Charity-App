import React, {useRef, useEffect} from 'react';
import {Image, FlatList, Dimensions, Platform, Text} from 'react-native';
import styled from 'styled-components/native';
import {Header} from '../../сomponents/Header';
import {ScreenContainer} from '../../сomponents/ScreenContainer';
import {CardTypes} from '../../Constants';
import {
  AccountsOverviewCard,
  AccountsOverviewCardProps,
} from '../../сomponents/AccountsOverviewCard';
import {GoodnessCard} from '../../сomponents/GoodnessCard';
import {GreetingByDateIndicator} from '../../сomponents/GreetingByDateIndicator';
import {GoodnessCardProps} from '../../сomponents/GoodnessCard';

import HeartLogo from '../../assets/images/logo.png';

type HomeViewProps = {userFirstName: string} & {
  cards: Array<
    (AccountsOverviewCardProps | GoodnessCardProps) & {type: CardTypes}
  >;
} & {renderFlatListItem: ({item}, ref) => JSX.Element};

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
}) => {
  const cardRefs = useRef<[]>([]);
  // videoRef.presentFullscreenPlayer();
  return (
    <ScreenContainer>
      <Header>
        <Image source={HeartLogo} />
      </Header>
      <HomeViewFlatList     
      onScroll={() => console.warn(cardRefs.current[2].paused)} 
      pagingEnabled={true}
      onMomentumScrollEnd={() => { console.warn(cardRefs.current[2].paused); cardRefs.current[2].paused = false;}}
        
        ListHeaderComponent={
          <GreetingByDateIndicator userFirstName={userFirstName} />
        }
        data={cards}
        renderItem={(item, index) => renderFlatListItem(item, cardRefs)}></HomeViewFlatList>
    </ScreenContainer>
  );
};
