import React, {useRef, useImperativeHandle} from 'react';
import {Image} from 'react-native';
import {Button} from 'react-native-elements';
import styled from 'styled-components/native';
import {CardSourceTypes, FontFamilyVariants} from '../../Constants';
import {CardWrapper} from '../CardWrapper';
import {CardTopBar} from './CardTopBar';
import {CardTopBarProps} from './CardTopBar';
import {CardMainImage, CardMainImageProps} from './CardMainImage';

import ActionButtonIcon from '../../assets/images/shareArrow.png';

export type GoodnessCardProps = {
  actionButtonTitle: string;
  cardDescribingText: string;
  sourceType: CardSourceTypes;
  buttonAction?: () => void;
} & CardTopBarProps &
  CardMainImageProps;

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
    paddingVertical: parseInt(theme.spaces[1]) + 3,
  },
  titleStyle: {
    fontFamily: FontFamilyVariants.Regular,
    fontSize: parseInt(theme.sizes[1]) + 5,
    marginLeft: parseInt(theme.spaces[0]),
  },
}))``;

const Spacer = styled.View`
  height: ${({theme}) => theme.sizes[2]};
`;

export const GoodnessCard: React.FC<GoodnessCardProps> = React.forwardRef(
  ({
    avatarIcon,
    title,
    charityName,
    time,
    actionButtonTitle,
    cardDescribingText,
    image,
    video,
    sourceType,
    buttonAction,
  }, ref) => {
    return (
      <CardWrapper>
        <CardTopBar
          avatarIcon={avatarIcon}
          title={title}
          charityName={charityName}
          time={time}
        />
        <CardMainImage image={image} video={video} sourceType={sourceType} ref={ref}/>
        <CardDescribingText>{cardDescribingText}</CardDescribingText>
        <CardActionButton
          icon={<Image source={ActionButtonIcon} />}
          title={actionButtonTitle}
          onPress={buttonAction}
        />
        <Spacer />
      </CardWrapper>
    );
  },
);
