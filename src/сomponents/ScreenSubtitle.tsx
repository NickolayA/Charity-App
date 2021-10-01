import styled from 'styled-components/native';
import {Text} from 'react-native';

export const ScreenSubtitle = styled(Text)`
  color: ${({theme}) => theme.colors.text.primary};
  font-size: ${({theme}) => theme.sizes[1]};
  text-align: center;
  font-family: 'SFRounded-Regular';
`;
