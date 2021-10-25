import React from 'react'
import {Animated, StatusBar} from 'react-native'
import {Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import {AuthStates} from '../../Constants'
import {
	SignInWrapper,
	SignInScreenLabelUnderscore,
	SignInScreenLabel,
	SignInFormWrapper,
	SignInLabel,
	RestorePasswordButton,
	AuthFailedMessage,
	SignInButtonsWrapper,
	AnimatedSignInButtonContainer,
	SignInButton,
	AdditionalLoginMethodsMessage,
	SignInButtonsSubWrapper,
	Spacer,
} from './styling'

interface SignInViewProps {
  onSignIn: () => void;
  authState: string;
  animationControl: Animated.Value;
  updateEmail: (newEmail: string) => void;
  updatePassword: (newPassword: string) => void;
}

export const SignInView: React.FC<SignInViewProps> = ({
	onSignIn,
	authState,
	animationControl,
	updateEmail,
	updatePassword,
}) => {
	return (
		<SignInWrapper>
			<SignInScreenLabelUnderscore>
				<SignInScreenLabel>Login</SignInScreenLabel>
			</SignInScreenLabelUnderscore>
			<SignInFormWrapper>
				<Input
					label={<SignInLabel>Email</SignInLabel>}
					placeholder="Your email address"
					onChangeText={updateEmail}
					autoCapitalize="none"
					keyboardType="email-address"
				/>
				<Input
					label={<SignInLabel>Password</SignInLabel>}
					placeholder="Password"
					secureTextEntry
					onChangeText={updatePassword}
					autoCapitalize="none"
				/>
				<RestorePasswordButton title="FORGOT PASSWORD" />
				{authState === AuthStates.AuthFail && (
					<AuthFailedMessage>Authentication failed</AuthFailedMessage>
				)}
			</SignInFormWrapper>
			<SignInButtonsWrapper>
				<AnimatedSignInButtonContainer
					style={{transform: [{translateY: animationControl}]}}>
					<SignInButton
						loading={authState === AuthStates.Logging}
						title="LOGIN"
						onPress={() => onSignIn()}
					/>
				</AnimatedSignInButtonContainer>
				<AdditionalLoginMethodsMessage>
          Lets test 2 ways to log in
				</AdditionalLoginMethodsMessage>
				<SignInButtonsSubWrapper>
					<SignInButton
						icon={<Icon name="finger-print-outline" size={20} />}
						title="Touch ID"
						disabled
					/>
					<Spacer />
					<SignInButton
						icon={<Icon name="person-circle-outline" size={20} />}
						title="Face ID"
						disabled
					/>
				</SignInButtonsSubWrapper>
			</SignInButtonsWrapper>
			<StatusBar backgroundColor="white" barStyle="dark-content" />
		</SignInWrapper>
	)
}
