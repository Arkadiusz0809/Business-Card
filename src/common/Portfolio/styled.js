import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./git-logo.svg";

export const Section = styled.div`
    margin: 72px auto;
    max-width: 1216px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
    }
`;

export const StyledGithubIcon = styled(GithubIcon)`
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 8px;
`;

export const Header = styled.header`
    text-align: center;
`; 

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 2px;
    color: ${({theme}) => theme.colors.textPrimary};
    margin: auto;

`;

export const SubTitle = styled.h3`
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 2px;
    color: ${({theme}) => theme.colors.textPrimary};
    margin: auto;
    padding-bottom: 24px;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;
