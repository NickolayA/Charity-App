import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ScreenContainerModel} from '../../models/ScreenContainerModel'
import {HomeView} from './HomeView'
import {State} from '../../redux/reducers'
import {CardsType} from '../../redux/reducers/cards'
import {
	pauseActionCreator,
	playActionCreator,
} from '../../redux/action-creators'
import { ProfileType } from '../../redux/reducers/profile'

export const HomeContainer: React.FC<ScreenContainerModel> = () => {
	const cardsState = useSelector<State, CardsType>(state => state.cards)
	const profileState = useSelector<State, ProfileType>(state => state.profile)

	const dispatch = useDispatch()

	const onItemsChanged = useCallback(({changed}) => {
		let lastElIndex = -1
		for (const {index, isViewable} of changed) {
			if (!isViewable) {
				dispatch(pauseActionCreator(index))
			} else {
				lastElIndex = Math.max(lastElIndex, index)
			}
		}
		if (lastElIndex !== -1) {
			dispatch(playActionCreator(lastElIndex))
		}
	}, [])

	return (
		<HomeView
			userFirstName={profileState.fullName}
			cards={cardsState}
			onItemsChanged={onItemsChanged}
		/>
	)
}
