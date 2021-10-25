import {ListItem} from 'react-native-elements'
import styled from 'styled-components/native'

export const CardListItem = styled(ListItem).attrs(({theme}) => ({
	containerStyle: {
		borderRadius: 10,
		backgroundColor: theme.colors.bg.transparent,
	},
	activeOpacity: 1,
	underlayColor: theme.colors.bg.navigation
}))``
