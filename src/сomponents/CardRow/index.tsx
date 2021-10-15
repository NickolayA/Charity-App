import React, {useContext, useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import {ListItem} from 'react-native-elements';
import styled, {ThemeContext} from 'styled-components/native';
import {Theme} from '../../theme';
import {CashTitle} from '../CashTitle';
import {CardSubtitle} from '../CardSubtitle';
import {CardListItem} from '../CardListItem';
import {CardTitle} from '../CardTitle';
import {useNavigation} from '@react-navigation/core';

export interface CardRowProps {
  title: string;
  subtitle: string;
  amount: number;
  icon?: ImageSourcePropType;
  action?: (navigation: any) => void;
  showChevron?: boolean;
  cardRowHeight?: number;
  specialMessage?: string;
}

const CardRowWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.bg.secondary};
  border-radius: ${({theme}) => theme.sizes[1]};
  justify-content: center;
`;

const CardRowChildrenWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin-bottom: ${({theme}) => theme.spaces[1]};
`;

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
  showChevron = true,
  cardRowHeight,
  children,
}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const theme = useContext<Theme>(ThemeContext);
  const navigation = useNavigation();
  return (
    <CardRowWrapper
      style={[
        cardRowHeight && {height: cardRowHeight},
        isPressed && {backgroundColor: theme.colors.bg.gray},
      ]}>
      <CardListItem
        onPress={action && (() => action(navigation))}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}>
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
            {showChevron && (
              <ListItem.Chevron
                color={theme.colors.icons.active}
                size={parseInt(theme.sizes[3])}
              />
            )}
          </CardRowTitleContainer>
        </ListItem.Content>
      </CardListItem>
      {children && <CardRowChildrenWrapper>{children}</CardRowChildrenWrapper>}
    </CardRowWrapper>
  );
};
