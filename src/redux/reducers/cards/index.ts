import {CardSourceTypes, CardTypes, RouteNames} from '../../../Constants'
import {AccountsOverviewCardProps} from '../../../сomponents/AccountsOverviewCard'
import {GoodnessCardProps} from '../../../сomponents/GoodnessCard'
import {VideoCardsType} from '../../action-types'
import {VideoCardsAction} from '../../actions'

import AvatarIcon from '../../../assets/images/avatar.png'
import RectangleIcon from '../../../assets/images/rectangle.png'
import Rectangle2Icon from '../../../assets/images/rectangle2.png'
import Rectangle2Video from '../../../assets/videos/matrica-4-voskreshenie-russkiy-treyler-1.mp4'
import HeartIcon from '../../../assets/images/heart.png'

export type CardsType = Array<
  | (AccountsOverviewCardProps & {type: CardTypes})
  | (GoodnessCardProps & {type: CardTypes})
>;

const testData: CardsType = [
	{
		type: CardTypes.AccountsOverviewCard,
		title: 'Accounts Overview',
		subtitle: 'Total Available cash',
		get amount() {
			return this.cashes
				.map(cash => cash.amount)
				.reduce((acc, nextAmount) => acc + nextAmount)
		},
		cashes: [
			{
				title: 'Checking',
				subtitle: 'Main account (...0353)',
				amount: 1500.2,
				action: navigation =>
					navigation.navigate(RouteNames.Checking, {
						checking: {subtitle: 'Main account (...0353)'},
					}),
			},
			{
				title: 'Savings',
				subtitle: 'Buy a house (...4044)',
				amount: 5000.2,
				action: navigation =>
					navigation.navigate(RouteNames.Savings, {
						saving: {subtitle: 'Buy a house (...4044)'},
					}),
				specialMessage: 'Savings is up 3% from last month',
			},
			{
				title: 'Goodness',
				subtitle: 'Cash Rewards',
				amount: 500.4,
				icon: HeartIcon,
			},
		],
	},
	{
		type: CardTypes.GoodnessCard,
		title: 'Your Giving Impact',
		charityName: 'St Jude',
		time: '4 hrs ago',
		avatarIcon: AvatarIcon,
		image: Rectangle2Icon,
		sourceType: CardSourceTypes.Image,
		cardDescribingText:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!',
		actionButtonTitle: 'Share to spread the word',
	},
	{
		type: CardTypes.GoodnessCard,
		title: 'Your Giving Impact',
		charityName: 'St Jude',
		time: '4 hrs ago',
		avatarIcon: AvatarIcon,
		image: RectangleIcon,
		video: Rectangle2Video,
		sourceType: CardSourceTypes.Video,
		cardDescribingText:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!',
		actionButtonTitle: 'Share to spread the word',
		paused: true,
	},
]

export const cardsReducer = (
	state = testData,
	action: VideoCardsAction,
): CardsType => {
	switch (action.type) {
	case VideoCardsType.PLAY:
		return changeVideoPlaybackState(state, false, action.payload)
	case VideoCardsType.PAUSE:
		return changeVideoPlaybackState(state, true, action.payload)
	case VideoCardsType.PAUSE_ALL:
		return stopAllVideos(state)
	default:
		return state
	}
}

const changeVideoPlaybackState = (
	state: CardsType,
	newValue: boolean,
	payload: number,
) => {
	const currentCard = state[payload] as GoodnessCardProps
	if (
		currentCard.sourceType === CardSourceTypes.Video &&
    currentCard.paused !== newValue
	) {
		const newState = state.map(el => ({...el}))
		const currentCardNewState = newState[payload] as GoodnessCardProps
		currentCardNewState.paused = newValue
		return newState
	}
	return state
}

const stopAllVideos = (state: CardsType) => {
	const newState = state.map(el => ({...el}))
	for (const s of newState) {
		if (
			s.type === CardTypes.GoodnessCard &&
      s.sourceType === CardSourceTypes.Video
		) {
			s.paused = true
		}
	}
	return newState
}
