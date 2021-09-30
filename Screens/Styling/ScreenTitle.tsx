import {Text} from 'react-native';
import styled from 'styled-components/native';

export const ScreenTitle = styled(Text)`
  color: ${({theme}) => theme.colors.text.primary};
  align-self: center;
  font-family: 'SFRounded-Bold';
  font-size: ${({theme}) => theme.sizes[2]};
  line-height: ${({theme}) => theme.sizes[3]};
`;
