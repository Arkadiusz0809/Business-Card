import styled from "styled-components";

export const Container = styled.footer`
    margin: 72px auto;
    max-width: 1216px;
    

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
    }
`;

export const Welcome = styled.h2`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.site.text};
    margin-bottom: 24px;
    letter-spacing: initial;
    text-transform: uppercase;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 5px;
        display: flex;
        justify-content: flex-start;
        margin-left: 20px;
    }
`;

export const Address = styled.address`
    font-style: unset;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
       padding: 20px;
    }
`;

export const Email = styled.a`
    font-weight: 900;
    font-size: 32px;
    margin: 24px 0;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 12px 0;       
        font-size: 16px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    margin-top: 10;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
    }
`;