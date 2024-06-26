import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    left: 70vw;
`;

export const Button = styled.button`
    cursor: pointer;
    background:none;
    border: none;
    display: flex;
    align-items: center;
    color: inherit;
    outline-offset: 8px;
`;

export const Text = styled.span`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 15.6px;
    margin: 5px;
    color: ${({ theme }) => theme.colors.themeSwitch.text};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    }
`;

export const Box = styled.span`
    background: ${({ theme }) => theme.colors.themeSwitch.background};
    border: 1px solid ${({ theme }) => theme.colors.themeSwitch.border};
    padding: 3px;
    border-radius: 12px;
    width: 48px;
    display: flex;
`;

export const IconWrapper = styled.span`
    background: ${({ theme }) => theme.colors.themeSwitch.wrapper};
    padding: 3px;
    border-radius: 50%;
    display: flex;
    transition: transform 0.3s;

    ${({ $moveToRight }) => $moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
    color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;