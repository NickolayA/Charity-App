import React from 'react';
import {Input, Button} from 'react-native-elements';
import styled from 'styled-components/native';
import {FontFamilyVariants} from '../../Constants';

const SearchSectionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({theme}) => theme.sizes[0]};
`;

const SearchInput = styled(Input).attrs(({theme}) => ({
  containerStyle: {
    width: '70%',
    padding: 0,
    paddingHorizontal: 0,
  },
  inputContainerStyle: {
    borderRadius: parseInt(theme.sizes[3]),
    borderWidth: 1,
    paddingLeft: parseInt(theme.spaces[2]),
    backgroundColor: theme.colors.bg.secondary,
    height: 40,
  },
  inputStyle: {
    fontFamily: FontFamilyVariants.Regular,
    fontSize: parseInt(theme.sizes[2]) - 2,
  },
}))``;

const SearchButton = styled(Button).attrs(({theme}) => ({
  containerStyle: {
    width: '25%',
    height: 40,
  },
  buttonStyle: {
    backgroundColor: theme.colors.bg.transparent,
    borderRadius: parseInt(theme.sizes[3]),
    borderWidth: 1,
    borderColor: theme.colors.border.primary,
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
