import {Platform, Animated} from 'react-native'
import {Button} from 'react-native-elements'
import {ScreenContainer} from '../../../сomponents/ScreenContainer'
import styled from 'styled-components/native'
import {FontFamilyVariants} from '../../../Constants'

export const SignInWrapper = styled(ScreenContainer)`
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.bg.secondary};
  padding-bottom: ${({theme}) =>
		Platform.OS === 'ios' ? theme.spaces[4] : theme.spaces[3]};
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  padding-top: ${Platform.OS === 'android' ? '30px' : '110px'};
`

export const SignInScreenLabel = styled.Text`
  font-family: ${FontFamilyVariants.Bold};
  font-size: ${({theme}) => theme.sizes[4]};
`

export const SignInScreenLabelUnderscore = styled.View`
  border-bottom-color: ${({theme}) => theme.colors.bg.primary};
  border-bottom-width: 3px;
  align-self: flex-start;
  padding-bottom: ${({theme}) => theme.spaces[0]};
  margin-left: ${({theme}) => theme.spaces[3]};
  margin-bottom: ${({theme}) => theme.spaces[3]};
`

export const SignInFormWrapper = styled.View`
  padding-horizontal: ${({theme}) => theme.spaces[2]};
  flex: 1;
`

export const SignInLabel = styled.Text`
  font-family: ${FontFamilyVariants.Regular};
  font-size: ${({theme}) => theme.sizes[3]};
`

export const RestorePasswordButton = styled(Button).attrs(({theme}) => ({
	buttonStyle: {
		backgroundColor: theme.colors.bg.transparent,
		alignSelf: 'flex-end',
	},
	titleStyle: {
		color: theme.colors.bg.primary,
		fontFamily: FontFamilyVariants.Bold,
		fontSize: parseInt(theme.sizes[1]),
	},
}))``

export const AuthFailedMessage = styled.Text`
  color: ${({theme}) => theme.colors.text.error};
  text-align: center;
  margin-top: ${({theme}) => theme.spaces[3]};
`

export const SignInButtonsWrapper = styled.View`
  padding-horizontal: ${({theme}) => theme.spaces[2]};
  flex: 0.41;
  justify-content: space-between;
`

export const SignInButtonsSubWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${({theme}) => theme.spaces[1]};
`

export const AdditionalLoginMethodsMessage = styled.Text`
  text-align: center;
  margin-bottom: ${({theme}) => theme.spaces[2]};
  font-size: ${({theme}) => theme.sizes[1]};
  color: ${({theme}) => theme.colors.text.secondary};
`

export const Spacer = styled.View`
  margin-horizontal: ${({theme}) => theme.spaces[0]};
`

export const AnimatedSignInButtonContainer = styled(Animated.View)`
  flex: 1;
`

export const SignInButton = styled(Button).attrs(({theme}) => ({
	containerStyle: {
		flex: 0.6,
	},
	titleStyle: {
		color: theme.colors.text.primary,
		fontFamily: FontFamilyVariants.Bold,
		fontSize: parseInt(theme.sizes[2]) - 5,
	},
	buttonStyle: {
		backgroundColor: theme.colors.bg.primary,
		borderRadius: 25,
		paddingVertical: parseInt(theme.sizes[1]),
		height: 40,
	},
	disabledTitleStyle: {
		fontFamily: FontFamilyVariants.Regular,
		fontSize: parseInt(theme.sizes[1]),
		marginLeft: parseInt(theme.sizes[0]) - 5,
	},
	disabledStyle: {
		backgroundColor: theme.colors.bg.transparent,
		borderWidth: 2,
		borderColor: theme.colors.border.primary,
		paddingVertical: parseInt(theme.spaces[0]) - 3,
		transform: [{translateY: 0}],
		height: 30,
	},
}))``
