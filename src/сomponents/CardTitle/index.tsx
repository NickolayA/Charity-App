import {ListItem} from 'react-native-elements';
import styled from 'styled-components/native';
import { FontFamilyVariants } from '../../Constants';

export const CardTitle = styled(ListItem.Title)`
font-family: ${FontFamilyVariants.Regular};
font-size: ${({theme}) => theme.sizes[2]};
include-font-padding: false;
`;