import React from 'react'
import {View} from 'react-native'
import {Divider} from 'react-native-elements'
import {CardWrapper} from '../CardWrapper'
import {CardRow, CardRowProps} from '../CardRow'
import {CardHeader, CardHeaderProps} from './CardHeader'

export type AccountsOverviewCardProps = CardHeaderProps & {
  cashes?: Array<CardRowProps>;
};

export const AccountsOverviewCard: React.FC<AccountsOverviewCardProps> = ({
	title,
	subtitle,
	amount,
	cashes,
}) => {
	const cachesArrLength = cashes.length

	return (
		<CardWrapper>
			<CardHeader title={title} amount={amount} subtitle={subtitle} />

			{cashes.map((cash, index) => {
				return (
					<View key={index + cash.title}>
						<CardRow {...cash} />
						{cachesArrLength - 1 !== index && <Divider />}
					</View>
				)
			})}
		</CardWrapper>
	)
}
