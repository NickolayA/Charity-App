import React from 'react';
import {Text, Image} from 'react-native';
import {Button, Card} from 'react-native-elements';
import styled from 'styled-components/native';
import {CardImageTypes, FontFamilyVariants} from '../../Constants';
import {CardWrapper} from '../CardWrapper';
import {CardTopBar} from './CardTopBar';

import {CardTopBarProps} from './CardTopBar';
import {CardMainImage, CardMainImageProps} from './CardMainImage';

import AvatarIcon from '../../assets/images/avatar.png';
import ActionButtonIcon from '../../assets/images/shareArrow.png';

interface GoodnessCardProps extends CardTopBarProps, CardMainImageProps {
  actionButtonTitle: string;
  cardDescribingText: string;
  cardImageType: string;
  buttonAction?: () => void;
}

const CardDescribingText = styled.Text`
  font-size: ${({theme}) => parseInt(theme.sizes[2]) - 1}px;
  font-family: ${FontFamilyVariants.Regular};
  margin-horizontal: ${({theme}) => theme.spaces[1]};
  margin-vertical: ${({theme}) => theme.spaces[2]};
`;

const CardActionButton = styled(Button).attrs(({theme}) => ({
  buttonStyle: {
    backgroundColor: theme.colors.bg.primary,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 40,
    paddingVertical: parseInt(theme.spaces[1]) + 5
  },
  titleStyle: {
    fontFamily: FontFamilyVariants.Regular,
    fontSize: parseInt(theme.sizes[1]) + 5,
    marginLeft: parseInt(theme.spaces[0])
  },
}))``;

const cardTopBarData: CardTopBarProps = {
  title: 'Your Giving Impact',
  avatarIcon: AvatarIcon,
  charityName: 'St Jude',
  time: '4 hrs ago',
};

export const GoodnessCard: React.FC<GoodnessCardProps> = ({
  actionButtonTitle = 'Share to spread the world', // TODO remove
  cardDescribingText = 'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!',
  cardImageType = CardImageTypes.Image,
  buttonAction,
}) => {
  return (
    <CardWrapper>
      <CardTopBar {...cardTopBarData} />
      <CardMainImage />
      <CardDescribingText>{cardDescribingText}</CardDescribingText>
      <CardActionButton icon={<Image source={ActionButtonIcon} />} title={actionButtonTitle} onPress={buttonAction} />
    </CardWrapper>
  );
};
