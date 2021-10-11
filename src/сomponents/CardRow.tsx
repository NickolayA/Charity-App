import React, {useContext} from 'react';
import {ImageSourcePropType} from 'react-native';
import {ListItem} from 'react-native-elements';
import styled, {ThemeContext} from 'styled-components/native';
import {Theme} from '../theme';
import {CashTitle} from './CashTitle';
import {CardSubtitle} from './CardSubtitle';
import {CardListItem} from './CardListItem';
import {CardTitle} from './CardTitle';

export interface CardRowProps {
  title: string;
  subtitle: string;
  amount: number;
  icon?: ImageSourcePropType;
  action?: () => void;
}

const CardRowLeftPartContent = styled(ListItem.Content)`
  flex: 0.5;
`;

const CardRowTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CardRowTitleIcon = styled.Image`
  margin-left: ${({theme}) => theme.spaces[0]};
`;

export const CardRow: React.FC<CardRowProps> = ({
  title,
  subtitle,
  amount,
  icon,
  action,
  children,
}) => {
  const theme = useContext<Theme>(ThemeContext);
  // TODO Fix children appearance
  return (
    <CardListItem onPress={action}>
      <CardRowLeftPartContent>
        <CardRowTitleContainer>
          <CardTitle>{title}</CardTitle>
          {icon && <CardRowTitleIcon source={icon} width height />}
        </CardRowTitleContainer>
        <CardSubtitle numberOfLines={1} ellipsizedMode="tail">
          {subtitle}
        </CardSubtitle>
      </CardRowLeftPartContent>
      <ListItem.Content right>
        <CardRowTitleContainer>
          <CashTitle
            currencyName="USD"
            currencyAmount={amount}
            size={theme.sizes[2]}
          />
          <ListItem.Chevron
            color={theme.colors.icons.active}
            size={parseInt(theme.sizes[3])}
          />
        </CardRowTitleContainer>
      </ListItem.Content>
      {children}
    </CardListItem>
  );
};
