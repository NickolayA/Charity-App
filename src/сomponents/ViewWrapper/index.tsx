import styled from 'styled-components/native'

export const ViewWrapper = styled.View`
  padding-horizontal: ${({theme}) => parseInt(theme.spaces[1]) + 5}px;
`
