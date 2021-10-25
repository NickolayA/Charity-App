import React from 'react'
import {View, FlatList, Dimensions} from 'react-native'
import styled from 'styled-components/native'
import {Header} from '../../сomponents/Header'
import {ScreenTitle} from '../../сomponents/ScreenTitle'
import {ScreenSubtitle} from '../../сomponents/ScreenSubtitle'
import {ScreenViewModel} from '../../models/ScreenViewModel'
import {CardHeader} from '../../сomponents/CardHeader'
import {ScreenContainer} from '../../сomponents/ScreenContainer'
import {SearchSection} from '../../сomponents/SearchSection'
import {CardWrapper} from '../../сomponents/CardWrapper'
import {TransactionsByDate} from '../../services/checking-account'

export type CheckingViewProps = ScreenViewModel & {
  totalAvailableCash: number;
  transactions: TransactionsByDate;
  renderFlatListItem: ({item}) => JSX.Element;
  filterHandler: (name: string) => void;
};

const CheckingViewWrapper = styled.View`
  margin-horizontal: ${({theme}) => parseInt(theme.spaces[1]) + 5}px;
`

const CheckingViewCardWrapper = styled(CardWrapper)`
  border-width: 0px;
`

const CheckingViewFlatList = styled(FlatList).attrs(({theme}) => ({
	contentContainerStyle: {
		backgroundColor: theme.colors.bg.navigation,
		paddingBottom: height / 2,
	},
}))`
  background-color: ${({theme}) => theme.colors.bg.navigation};
`

const {height} = Dimensions.get('window')

export const CheckingView: React.FC<CheckingViewProps> = ({
	screenTitle,
	screenSubtitle,
	onExitRoute,
	totalAvailableCash,
	transactions,
	renderFlatListItem,
	filterHandler,
}) => {
	return (
		<ScreenContainer>
			<Header onExitRoute={onExitRoute}>
				<View>
					<ScreenTitle>{screenTitle}</ScreenTitle>
					{screenSubtitle && <ScreenSubtitle>{screenSubtitle}</ScreenSubtitle>}
				</View>
			</Header>
			<CheckingViewWrapper>
				<CheckingViewCardWrapper>
					<CheckingViewFlatList
						data={transactions}
						renderItem={renderFlatListItem}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={
							<View>
								<CardHeader
									amount={totalAvailableCash}
									subtitle={'Total available cash'}
								/>
								<SearchSection inputHandler={filterHandler} />
							</View>
						}
					/>
				</CheckingViewCardWrapper>
			</CheckingViewWrapper>
		</ScreenContainer>
	)
}
