import styled from "styled-components";


export const Section = styled.div`
    border-radius: 4px;
    background: ${({theme}) => theme.color.white};
    box-shadow: 
    0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    padding: 56px;
    max-width: 600px;
    border: 6px solid rgba(209, 213, 218, 0.3)

`;

export const Title = styled.h3`
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 2px;
    color: ${({theme}) => theme.color.scienceblue};
    margin: 0;
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 1px;
    color: ${({theme}) => theme.color.slategray};
    line-height: 25.2px;
`;

export const Link = styled.div` 
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 8px;
    line-height: 25.2px;
`;

export const LinkName = styled.div`
    font-weight: 400px;
    font-size: 18px;
    color: ${({theme}) => theme.color.slategray};
`;

export const LinkCode = styled.a`
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 1px;
    word-break: break-all;
    color: ${({theme}) => theme.color.scienceblue};
    border-bottom: 1px solid ${({theme}) => theme.color.scienceblue};
    margin-left: 8px;
`;
