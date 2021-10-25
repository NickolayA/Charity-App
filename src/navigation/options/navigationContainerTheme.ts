import {DefaultTheme, Theme} from '@react-navigation/native'
import {colors} from '../../theme/colors'

export const NavigationTheme: Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: colors.bg.navigation
	}
}
