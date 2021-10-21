import styled from 'styled-components/native';

export const CardWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.bg.secondary};
  border-radius: ${({theme}) => theme.sizes[1]};
  margin-bottom: ${({theme}) => theme.spaces[2]};
  border-width: 0.2px;
  border-color: ${({theme}) => theme.colors.border.primary};
  padding-bottom: 0.15px;
`;
