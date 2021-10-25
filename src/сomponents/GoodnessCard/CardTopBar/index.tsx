import React from 'react'
import styled from 'styled-components/native'
import {ImageSourcePropType} from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'
import {CardListItem} from '../../CardListItem'
import {CardTitle} from '../../CardTitle'
import {CardSubtitle} from '../../CardSubtitle'

export interface CardTopBarProps {
  avatarIcon?: ImageSourcePropType;
  title: string;
  charityName?: string;
  time?: string;
}

const SubtitleDivider = styled.View`
  background-color: ${({theme}) => theme.colors.bg.primary};
  align-self: center;
  width: 3px;
  height: 3px;
  border-radius: 3px;
  margin-horizontal: 3px;
`

const CardSubtitleWrapper = styled.View`
  flex-direction: row;
`

export const CardTopBar: React.FC<CardTopBarProps> = ({
	title,
	charityName,
	time,
	avatarIcon,
}) => {
	return (
		<CardListItem>
			<Avatar source={avatarIcon} />
			<ListItem.Content>
				<CardTitle>{title}</CardTitle>
				<CardSubtitleWrapper>
					<CardSubtitle>{charityName} </CardSubtitle>
					<SubtitleDivider></SubtitleDivider>
					<CardSubtitle> {time}</CardSubtitle>
				</CardSubtitleWrapper>
			</ListItem.Content>
		</CardListItem>
	)
}
