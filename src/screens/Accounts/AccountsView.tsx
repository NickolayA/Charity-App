import React from 'react'
import styled from 'styled-components/native'
import {Header} from '../../сomponents/Header'
import {ScreenViewModel} from '../../models/ScreenViewModel'
import {ScreenTitle} from '../../сomponents/ScreenTitle'
import {ScreenContainer} from '../../сomponents/ScreenContainer'
import {CardHeader} from '../../сomponents/CardHeader'
import {
	MoneyActionButton,
	MoneyActionButtonProps,
} from '../../сomponents/MoneyActionButton'

import {AccountsOverviewCardProps} from '../../сomponents/AccountsOverviewCard'

import {CardRow} from '../../сomponents/CardRow'
import {FontFamilyVariants} from '../../Constants'
import {CardWrapper} from '../../сomponents/CardWrapper'

type AccountsViewProps = ScreenViewModel & {data: AccountsOverviewCardProps} & {
  circleButtonsData: Array<MoneyActionButtonProps>;
};

const MoneyActionButtonsWrapper = styled.View`
  margin-top: ${({theme}) => theme.spaces[1]};
  flex-direction: row;
  justify-content: space-around;
  padding-horizontal: ${({theme}) => theme.spaces[2]};
`

const AccountsCardRowWrapper = styled(CardWrapper)`
  margin-top: ${({theme}) => theme.spaces[2]};
  margin-bottom: 0;
  margin-horizontal: ${({theme}) => parseInt(theme.spaces[1]) + 5}px;
  padding-top: 3px;
  padding-bottom: 1px;
  background-color: ${({theme}) => theme.colors.bg.navigation};
`

const Triangle = styled.View`
  width: 0px;
  height: 0px;
  background-color: ${({theme}) => theme.colors.bg.transparent};
  border-style: solid;
  border-left-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 10px;
  border-left-color: ${({theme}) => theme.colors.bg.transparent};
  border-right-color: ${({theme}) => theme.colors.bg.transparent};
  border-bottom-color: ${({theme}) => theme.colors.text.special};
`

const SpecialMessage = styled.Text`
  font-family: ${FontFamilyVariants.Light};
  color: ${({theme}) => theme.colors.text.special};
  include-font-padding: false;
`

export const AccountsView: React.FC<AccountsViewProps> = ({
	screenTitle,
	data,
	circleButtonsData,
}) => {
	return (
		<ScreenContainer>
			<Header>
				<ScreenTitle>{screenTitle}</ScreenTitle>
			</Header>
			<CardHeader amount={data.amount} subtitle={data.subtitle} />
			<MoneyActionButtonsWrapper>
				{circleButtonsData.map((circleButton, index) => (
					<MoneyActionButton
						key={circleButton.subtitle + index}
						{...circleButton}
					/>
				))}
			</MoneyActionButtonsWrapper>
			{data.cashes.map((cash, index) => (
				<AccountsCardRowWrapper key={index + cash.title}>
					{cash.specialMessage ? (
						<CardRow {...cash} cardRowHeight={91}>
							<Triangle />
							<SpecialMessage> {cash.specialMessage}</SpecialMessage>
						</CardRow>
					) : (
						<CardRow {...cash} cardRowHeight={90} />
					)}
				</AccountsCardRowWrapper>
			))}
		</ScreenContainer>
	)
}
