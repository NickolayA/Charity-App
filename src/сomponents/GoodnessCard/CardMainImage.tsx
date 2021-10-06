import React from 'react';
import { ImageSourcePropType, Image } from 'react-native';

export interface CardMainImageProps {
    image?: ImageSourcePropType;
}

import RectangleIcon from '../../assets/images/rectangle.png';

export const CardMainImage: React.FC<CardMainImageProps> = ({}) => {
    return <Image source={RectangleIcon} />;
}