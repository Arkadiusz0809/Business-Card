import styled from "styled-components";

export const Wrapper = styled.article`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 72px;
    margin: 119px auto ;
    max-width: 1089px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-gap: 32px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-gap: 12px;
        grid-template-columns: 1fr;
    }
`;

export const Img = styled.img`
    width: 30vw;
    max-width: 398px;
    border-radius: 50%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 132px;
    }
`;
export const Content = styled.div``;

export const Caption = styled.div`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-top: 64px;
    letter-spacing: initial;
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
    margin: 12px 0 12px 0;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 22px;
        margin-top: 8px;
    }
`;

export const Description = styled.h1`
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.color.site.text};
    margin: 23px 0 32px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        margin-top: 16px
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        max-width: 570px;
    }
`;

export const Button = styled.button`
    margin-bottom: 0 0 73px 0;
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.color.white};
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

export const ButtonName = styled.div`
    padding-left: 16px;
`;

export const ButtonIcon = styled.img`
    width: 24px;
    height: 24px;
`;


