import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {Header} from '../../сomponents/Header';
import {ScreenViewModel} from '../../models/ScreenViewModel';
import {ScreenTitle} from '../../сomponents/ScreenTitle';
import {ScreenContainer} from '../../сomponents/ScreenContainer';
import {CardHeader} from '../../сomponents/CardHeader';
import {
  MoneyActionButton,
  MoneyActionButtonProps,
} from '../../сomponents/MoneyActionButton';

import {AccountsOverviewCardProps} from '../../сomponents/AccountsOverviewCard';

import {CardRow} from '../../сomponents/CardRow';
import {FontFamilyVariants} from '../../Constants';

type AccountsViewProps = ScreenViewModel & {data: AccountsOverviewCardProps} & {
  circleButtonsData: Array<MoneyActionButtonProps>;
};

const MoneyActionButtonsWrapper = styled.View`
  margin-top: ${({theme}) => theme.spaces[1]};
  flex-direction: row;
  justify-content: space-around;
  padding-horizontal: ${({theme}) => theme.spaces[2]};
`;

const AccountsCardRowWrapper = styled.View`
  margin-top: ${({theme}) => theme.spaces[2]};
  margin-horizontal: ${({theme}) => theme.spaces[1]};
`;

const Triangle = styled.View`
  width: 0px;
  height: 0px;
  background-color: ${({theme}) => theme.colors.bg.transparent};
  border-style: solid;
  border-left-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 10px;
  border-left-color: ${({theme}) => theme.colors.bg.transparent};
  border-right-color: ${({theme}) => theme.colors.bg.transparent};
  border-bottom-color: ${({theme}) => theme.colors.text.special};
`;

const SpecialMessage = styled.Text`
  font-family: ${FontFamilyVariants.Light};
  color: ${({theme}) => theme.colors.text.special};
  include-font-padding: false;
`;

export const AccountsView: React.FC<AccountsViewProps> = ({
  screenTitle,
  data,
  circleButtonsData,
}) => {
  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>{screenTitle}</ScreenTitle>
      </Header>
      <CardHeader amount={data.amount} subtitle={data.subtitle} />
      <MoneyActionButtonsWrapper>
        {circleButtonsData.map(circleButton => (
          <MoneyActionButton {...circleButton} />
        ))}
      </MoneyActionButtonsWrapper>
      {data.cashes.map((cash, index) => (
        <AccountsCardRowWrapper>
          <CardRow key={index + cash.title} {...cash}>
            {cash.specialMessage && <Triangle />}
            {cash.specialMessage && (
              <SpecialMessage> {cash.specialMessage}</SpecialMessage>
            )}
            {!cash.specialMessage && <View />}
          </CardRow>
        </AccountsCardRowWrapper>
      ))}
    </ScreenContainer>
  );
};
