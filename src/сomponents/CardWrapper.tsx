import styled from 'styled-components/native';

export const CardWrapper = styled.View`
    background-color: ${({theme}) => theme.colors.bg.secondary};
    border-radius: ${({theme}) => theme.sizes[1]};
    margin-horizontal: 10px;
    margin-top: 20px;
    padding-bottom: ${({theme}) => theme.spaces[2]};
`;