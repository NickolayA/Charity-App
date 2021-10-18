import React from 'react';
import {Platform} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styled from 'styled-components/native';
import {FontFamilyVariants} from '../../Constants';

const SearchSectionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({theme}) => theme.sizes[1]};
  margin-bottom: ${({theme}) => theme.sizes[2]};
`;

const SearchInput = styled(Input).attrs(({theme}) => ({
  containerStyle: {
    width: '70%',
    paddingHorizontal: 0,
    height: 40
  },
  inputContainerStyle: {
    borderRadius: parseInt(theme.sizes[3]),
    borderWidth: 1,
    paddingLeft: parseInt(theme.spaces[2]),
    backgroundColor: theme.colors.bg.secondary,
    height: 35,
  },
  inputStyle: {
    fontFamily: FontFamilyVariants.Regular,
    fontSize: parseInt(theme.sizes[2]) - 2,
    padding: 0,
  },
}))``;

const SearchButton = styled(Button).attrs(({theme}) => ({
  containerStyle: {
    width: '25%',
    height: 35,
  },
  buttonStyle: {
    backgroundColor: theme.colors.bg.transparent,
    borderRadius: parseInt(theme.sizes[3]),
    borderWidth: 1,
    borderColor: theme.colors.border.primary,
    paddingVertical: Platform.OS === 'android' ? 3 : 6,
  },
  titleStyle: {
    color: theme.colors.text.secondary,
    fontFamily: FontFamilyVariants.Regular,
    fontSize: parseInt(theme.sizes[2]) - 2,
  },
}))``;

export const SearchSection: React.FC<{inputHandler: (name: string) => void}> =
  ({inputHandler}) => {
    return (
      <SearchSectionWrapper>
        <SearchInput
          placeholder="Search transactions"
          onChangeText={inputHandler}
        />
        <SearchButton title="Filter By" type="outline" />
      </SearchSectionWrapper>
    );
  };
