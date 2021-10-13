import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {CardSubtitle} from '../CardSubtitle';

export interface MoneyActionButtonProps {
  icon: string;
  subtitle: string;
}

const MoneyActionButtonWrapper = styled(TouchableOpacity)`
  align-items: center;
`;

export const MoneyActionButton: React.FC<MoneyActionButtonProps> = ({
  icon,
  subtitle,
}) => {
  return (
    <MoneyActionButtonWrapper>
      <Image source={icon} />
      <CardSubtitle>{subtitle}</CardSubtitle>
    </MoneyActionButtonWrapper>
  );
};
