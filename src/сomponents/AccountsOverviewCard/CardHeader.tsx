import React from 'react';
import styled from 'styled-components/native';
import {ListItem} from 'react-native-elements';
import {CashTitle} from '../CashTitle';
import {CardTitle} from '../CardTitle';
import {CardSubtitle} from '../CardSubtitle';
import {CardListItem} from '../CardListItem';

export interface CardHeaderProps {
  title: string;
  subtitle: string;
  amount?: number;
}

const Spacer = styled.View`
    margin-top: ${({theme}) => theme.spaces[0]};
`;

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  amount,
}) => {
  return (
    <CardListItem>
      <ListItem.Content style={{alignItems: 'center', paddingTop: 15}}>
        <CardTitle>{title}</CardTitle>
        <Spacer/>
        <CashTitle currencyName="USD" currencyAmount={amount} size="30px" />
        <CardSubtitle>{subtitle}</CardSubtitle>
      </ListItem.Content>
    </CardListItem>
  );
};
