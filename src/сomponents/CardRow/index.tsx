import React, {useContext, useState} from 'react'
import {ImageSourcePropType, View} from 'react-native'
import {ListItem} from 'react-native-elements'
import styled, {ThemeContext} from 'styled-components/native'
import {Theme} from '../../theme'
import {CashTitle} from '../CashTitle'
import {CardSubtitle} from '../CardSubtitle'
import {CardListItem} from '../CardListItem'
import {CardTitle} from '../CardTitle'
import {useNavigation} from '@react-navigation/core'

export interface CardRowProps {
  title: string;
  subtitle?: string;
  amount: number;
  titleColor?: string;
  subtitleColor?: string;
  amountColor?: string;
  textSize?: number;
  leftSideIcon?: unknown;
  icon?: ImageSourcePropType;
  action?: (navigation: unknown) => void;
  showChevron?: boolean;
  cardRowHeight?: number;
  specialMessage?: string;
}

const CardRowWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.bg.secondary};
  border-radius: ${({theme}) => theme.sizes[1]};
  justify-content: center;
  width: 100%;
`

const CardRowChildrenWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin-bottom: ${({theme}) => theme.spaces[1]};
`

const CardRowLeftPartContent = styled(ListItem.Content)`
  flex: 0.5;
  flex-direction: row;
  justify-content: flex-start;
`

const CardRowTitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

const CardRowTitleIcon = styled.Image`
  margin-left: ${({theme}) => theme.spaces[0]};
`

const CardRowLeftPartIcons = styled.Image`
  align-self: center;
  margin-right: ${({theme}) => theme.spaces[1]};
`

export const CardRow: React.FC<CardRowProps> = ({
	title,
	subtitle,
	amount,
	titleColor,
	subtitleColor,
	amountColor,
	textSize,
	leftSideIcon,
	icon,
	action,
	showChevron = true,
	cardRowHeight,
	children,
}) => {
	const [isPressed, setIsPressed] = useState<boolean>(false)
	const theme = useContext<Theme>(ThemeContext)
	const navigation = useNavigation()
	return (
		<CardRowWrapper
			style={[
				cardRowHeight && {height: cardRowHeight},
				isPressed && {backgroundColor: theme.colors.bg.navigation},
			]}>
			<CardListItem
				onPress={action && (() => action(navigation))}
				onPressIn={() => setIsPressed(true)}
				onPressOut={() => setIsPressed(false)}>
				<CardRowLeftPartContent>
					{leftSideIcon && <CardRowLeftPartIcons source={leftSideIcon} />}
					<View style={{flex: 1}}>
						<CardRowTitleWrapper>
							<CardTitle
								style={[
									titleColor && {color: titleColor},
									textSize && {fontSize: textSize},
								]}>
								{title}
							</CardTitle>
							{icon && <CardRowTitleIcon source={icon} width height />}
						</CardRowTitleWrapper>
						{subtitle && (
							<CardSubtitle
								style={subtitleColor && {color: subtitleColor}}
								numberOfLines={1}
								ellipsizedMode="tail">
								{subtitle}
							</CardSubtitle>
						)}
					</View>
				</CardRowLeftPartContent>
				<ListItem.Content right>
					<CardRowTitleWrapper>
						<CashTitle
							currencyName="USD"
							currencyAmount={amount}
							size={textSize ? textSize + 'px' : theme.sizes[3]}
							color={amountColor}
						/>
						{showChevron && (
							<ListItem.Chevron
								color={theme.colors.icons.active}
								size={parseInt(theme.sizes[3])}
							/>
						)}
					</CardRowTitleWrapper>
				</ListItem.Content>
			</CardListItem>
			{children && <CardRowChildrenWrapper>{children}</CardRowChildrenWrapper>}
		</CardRowWrapper>
	)
}
