import React from 'react';
import moment from 'moment';
import styled from 'styled-components/native';
import { FontFamilyVariants } from '../Constants';

enum GreetingTypes {
  Morning = 'Good Morning',
  Afternoon = 'Good Afternoon',
  Evening = 'Good Evening',
}

const getGreetingByDayPart = (): GreetingTypes => {
    const currentHour = (new Date()).getHours();

    switch(true) {
        case (currentHour < 12):
            return GreetingTypes.Morning;
        case (currentHour < 18):
            return GreetingTypes.Afternoon;
        default:
            return GreetingTypes.Evening;
    }
}

const GreetingByDateIndicatorWrapper = styled.View`
    flex-direction: row;
`;

const GreetingByDateIndicatorContent = styled.Text`
  color: ${({theme}) => theme.colors.text.secondary};
  font-family: ${FontFamilyVariants.Regular};  
  margin-top: 20px;
`;

export const GreetingByDateIndicator: React.FC<{userFirstName: string}> = ({
  userFirstName,
}) => {
  return (
    <GreetingByDateIndicatorWrapper>
      <GreetingByDateIndicatorContent>{getGreetingByDayPart()} </GreetingByDateIndicatorContent>
      <GreetingByDateIndicatorContent>{userFirstName} |</GreetingByDateIndicatorContent>
      <GreetingByDateIndicatorContent> {moment().format('ll')}</GreetingByDateIndicatorContent>
    </GreetingByDateIndicatorWrapper>
  );
};
