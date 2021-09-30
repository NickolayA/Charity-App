import React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, StatusBar, Platform} from 'react-native';

export const SafeAreaTop = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0}px;
  background-color: ${({theme}) => theme.colors.bg.primary};
`;

export const SafeAreaBottom = styled(SafeAreaView)`
  flex: 0;
`;
