import { ListItem } from 'react-native-elements';
import styled from 'styled-components/native';
import { FontFamilyVariants } from '../Constants';

export const CardSubtitle = styled(ListItem.Subtitle)`
  color: ${({theme}) => theme.colors.text.secondary};
  font-family: ${FontFamilyVariants.Light};
`;