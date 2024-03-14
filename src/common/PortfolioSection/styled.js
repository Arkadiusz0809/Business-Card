import styled from "styled-components";

export const Section = styled.div`
    margin: 72px auto;
    display: grid;
    max-width: 1216px;
`;

export const Img = styled.img`
    margin: auto;
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 2px;
    color: ${({theme}) => theme.color.mineshaft};
    margin: auto;

`;

export const SubTitle = styled.h3`
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 2px;
    color: ${({theme}) => theme.color.mineshaft};
    margin: auto;
    padding-bottom: 24px;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
