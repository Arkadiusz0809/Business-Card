import styled from "styled-components";

export const Section = styled.h2`
    margin: 73px;
    background: ${({theme})=> theme.color.white};
    padding: 32px;
    max-width: 1216px;
    box-shadow: 0px 16px 58px 0px ${({theme}) => theme.color.violet};
    box-shadow: 0px -2px 50px 0px ${({theme}) => theme.color.violet};
`;

export const Title = styled.h2 `
    font-weight: 900;
    font-size: 30px;
    color: ${({theme}) => theme.color.mineshaft};
`;