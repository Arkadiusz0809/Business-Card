import styled from "styled-components";

export const Title = styled.article`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 72px;
    margin: 119px ;
    max-width: 1089px;
`;

export const Img = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 60%;
`;
export const Content = styled.div``;

export const Caption = styled.p`
    font-weight: 700;
    font-size: 12px;
    color: ${({theme}) => theme.color.slategray};
    margin-top: 64px;
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
    margin: 12px 0 12px 0;
`;

export const Description = styled.h1`
    font-weight: 400;
    font-size: 20px;
    color: ${({theme}) => theme.color.slategray};
    margin: 23px 0 32px 0;
`;

export const Button = styled.button`
    margin-bottom: 0 0 73px 0;
    padding: 12px 16px 12px 16px;
    border: 1px solid ${({theme}) => theme.color.iron};
    background: ${({theme}) => theme.color.scienceblue};
    border-radius: 4px;
    width: 154px;
    height: 49px;
    font-weight: 600;
    font-size: 20px;
    color: ${({theme}) => theme.color.white};
    display: flex;
    align-items: center;

`;

export const ButtonName = styled.div`
    padding-left: 16px;
`;

export const ButtonRectangle = styled.img`
    width: 24px;
    height: 24px;
`;


