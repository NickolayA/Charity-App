import styled from 'styled-components/native';

export const CardWrapper = styled.View`
    background-color: ${({theme}) => theme.colors.bg.secondary};
    border-radius: ${({theme}) => theme.sizes[1]};
    margin-top: 20px;
`;