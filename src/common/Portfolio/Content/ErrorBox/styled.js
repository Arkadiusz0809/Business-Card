import styled from "styled-components";
import { ReactComponent as WarningIcon } from "./Danger.svg";


export const Wrapper = styled.article`
    margin-top: 88px;
    display: grid;
    justify-items: center;
    grid-gap: 32px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-gap: 24px;
        margin-top: 48px;
    }
`;

export const Header = styled.header`
    font-weight: 700;
    font-size: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
    }
`;

export const Paragraph = styled.div`
    margin: 0 auto;
    font-size: 20px;
    line-height: 1.4;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }
`;

export const Button = styled.a`
    margin: 24px 0 24px 0;
    text-decoration: none;
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.buttonLink.text };
    display: inline-flex;
    align-items: center;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow}
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`;

export const Icon = styled(WarningIcon)`
    color: ${({ theme }) => theme.colors.bodyText};
`;