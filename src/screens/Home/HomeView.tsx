import React from 'react'
import {Image, FlatList, Dimensions, Platform} from 'react-native'
import styled from 'styled-components/native'
import {Header} from '../../сomponents/Header'
import {ScreenContainer} from '../../сomponents/ScreenContainer'
import {CardTypes} from '../../Constants'
import {AccountsOverviewCard, AccountsOverviewCardProps} from '../../сomponents/AccountsOverviewCard'
import {GreetingByDateIndicator} from '../../сomponents/GreetingByDateIndicator/GreetingByDateIndicator'
import {GoodnessCard, GoodnessCardProps} from '../../сomponents/GoodnessCard'

import HeartLogo from '../../assets/images/logo.png'

export type HomeViewProps = {userFirstName: string} & {
  cards: Array<
    (AccountsOverviewCardProps | GoodnessCardProps) & {type: CardTypes}
  >;
} & {
  onItemsChanged: ({changedItems}) => void;
};

const {height} = Dimensions.get('window')

const HomeViewFlatList = styled(FlatList).attrs({
	contentContainerStyle: {
		paddingBottom: Platform.OS === 'android' ? height / 6 : height / 4,
	},
	ListHeaderComponentStyle: {
		marginBottom: 19,
	},
})`
  margin-horizontal: ${({theme}) => parseInt(theme.spaces[1]) + 5}px;
`
const renderFlatListItem = ({item, index}): JSX.Element => {
	return item.type === CardTypes.AccountsOverviewCard ? (
		<AccountsOverviewCard {...(item as AccountsOverviewCardProps)} />
	) : (
		<GoodnessCard {...(item as GoodnessCardProps)} cardIndex={index}/>
	)
}

export const HomeView: React.FC<HomeViewProps> = ({
	userFirstName,
	cards,

	onItemsChanged,
}) => {
	return (
		<ScreenContainer>
			<Header>
				<Image source={HeartLogo} />
			</Header>
			<HomeViewFlatList
				onViewableItemsChanged={onItemsChanged}
				ListHeaderComponent={
					<GreetingByDateIndicator userFirstName={userFirstName} />
				}
				data={cards}
				renderItem={renderFlatListItem}
				showsVerticalScrollIndicator={false}
				viewabilityConfig={
					Platform.OS === 'ios'
						? {itemVisiblePercentThreshold: 100}
						: {itemVisiblePercentThreshold: 75}
				}
			/>
		</ScreenContainer>
	)
}
