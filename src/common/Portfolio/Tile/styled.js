import styled from "styled-components";
import α from "color-alpha";

export const List = styled.ul`
    margin-top: 24px;
    display: grid;
    list-style: none;
    padding: 0;
    grid-gap: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-rows: 1fr;
        grid-gap: 0px;
        margin-top: 8px;
    }
`;

export const ListTile = styled.li`
    padding: 56px;
    margin: 0;
    background: ${({ theme }) => theme.colors.boxBackground};
    border: 6px solid ${({ theme }) => theme.colors.tile.border};
    transition: border-color 0.3s;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};

    &:hover {
        border-color: ${({ theme }) => theme.colors.tile.borderHover};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 16px;
    }
`;

export const Title = styled.h3`
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.site.text};
    line-height: 25.2px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 16px;
        font-size: 14px;
    }
`;

export const Link = styled.dl` 
    display: grid;
    grid-gap: 8px;
    line-height: 1.6;
    grid-template-rows: repeat(2, 1fr);
    margin-left: -40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 16px;
        font-size: 14px;
    }
    
`;

export const LinkName = styled.dd`
    font-weight: 400px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textPrimary};


    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
    }
`;

export const LinkCode = styled.a`
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 1px;
    word-break: break-all;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }) => α(theme.colors.primary, 0.3)};
    padding-bottom: 1px;
    margin-left: 8px;

    &:hover {
        border-color: unset;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
    }
`;

