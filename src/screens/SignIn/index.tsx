import React, {useEffect, useRef, useState} from 'react'
import {Keyboard, Animated} from 'react-native'
import {SignInView} from './SignInView'
import {signInService} from '../../services/auth'
import {useDispatch, useSelector} from 'react-redux'
import {signInActionCreator} from '../../redux/action-creators'
import {State} from '../../redux/reducers'

export const SignInContainer = () => {
	const dispatch = useDispatch()
	const authState = useSelector<State, string>(state => state.auth)

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const updateEmail = (newEmail: string): void => setEmail(newEmail)
	const updatePassword = (newPassword: string): void =>
		setPassword(newPassword)

	const signInButtonTranslateAnim = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Keyboard.addListener('keyboardDidShow', () => {
			Animated.timing(signInButtonTranslateAnim, {
				toValue: -100,
				useNativeDriver: true,
			}).start()
		})
		Keyboard.addListener('keyboardDidHide', () =>
			Animated.timing(signInButtonTranslateAnim, {
				toValue: 0,
				useNativeDriver: true,
			}).start(),
		)
		return () => {
			Keyboard.removeAllListeners('keyboardDidShow')
			Keyboard.removeAllListeners('keyboardDidHide')
		}
	}, [])

	return (
		<SignInView
			onSignIn={() =>
				dispatch(signInActionCreator(email, password, signInService))
			}
			authState={authState}
			animationControl={signInButtonTranslateAnim}
			updateEmail={updateEmail}
			updatePassword={updatePassword}
		/>
	)
}
