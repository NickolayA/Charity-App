import React from 'react'
import styled from 'styled-components/native'
import {getLocalization} from '../../services/localization'
import {FontFamilyVariants} from '../../Constants'

interface CashTitleProps {
  currencyName: string;
  currencyAmount: number;
  size?: string;
  color?: string;
}

const getDecimalAmountPart = (amount: number): string => {
	return (amount % 1).toFixed(2).slice(2)
}

const formatToCurrencyString = (
	amount: number,
	currencyName: string,
): string => {
	const locale = getLocalization()
	return parseInt(Math.floor(amount).toFixed()).toLocaleString(locale, {
		style: 'currency',
		currency: currencyName,
		minimumFractionDigits: 0,
	})
}

const CashTitleWrapper = styled.Text`
  include-font-padding: false;
`

export const CashTitle: React.FC<CashTitleProps> = ({
	currencyName,
	currencyAmount,
	size,
	color,
}) => {
	const IntegerAmountPart = styled.Text`
    font-size: ${({theme}) => size || theme.sizes[3]};
    font-family: ${FontFamilyVariants.Light};
  `
	const DecimalAmountPart = styled.Text`
    font-size: ${({theme}) =>
		parseInt(size) * 0.75 || parseInt(theme.sizes[3]) * 0.75}px;
    font-family: ${FontFamilyVariants.Light};
  `

	const integerAmount = formatToCurrencyString(currencyAmount, currencyName)
	const decimalAmount = getDecimalAmountPart(currencyAmount)

	return (
		<CashTitleWrapper>
			<IntegerAmountPart style={color && {color}}>
				{integerAmount}
			</IntegerAmountPart>
			<DecimalAmountPart style={color && {color}}>
        .{decimalAmount}
			</DecimalAmountPart>
		</CashTitleWrapper>
	)
}
