import {Platform} from 'react-native'
import styled from 'styled-components/native'

export const CardWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.bg.secondary};
  border-radius: ${({theme}) =>
		Platform.OS === 'ios'
			? theme.sizes[1]
			: parseInt(theme.sizes[1]) - 5 + 'px'};
  margin-bottom: ${({theme}) => theme.spaces[2]};
  border-width: 0.21px;
  border-color: ${({theme}) => theme.colors.border.primary};
  padding-bottom: 0.15px;
`
