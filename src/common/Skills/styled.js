import styled from "styled-components";

export const Section = styled.section`
    margin: 73px auto;
    background: ${({ theme }) => theme.colors.boxBackground};
    padding: 32px;
    display: grid;
    max-width: 1216px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 48px auto;
        padding: 16px;
    }
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;
    letter-spacing: 1px;
    word-wrap: break-word;
    padding-bottom: 13px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        padding-bottom: 12px;   
    }   

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }        

`;

export const List = styled.ul`
    list-style: none;
    border-top: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
    margin-bottom: 0;
    display: grid;
    grid-gap: 8px 70px;
    grid-template-columns: repeat(3, 1fr);
    font-weight: 400;
    font-size: 18px;
    padding: 32px 0 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        font-size: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
        margin-top: 12px;
        grid-template-columns: 1fr;
    }
`;

export const ListItem = styled.li`
    &:before {
        content: "•";
        color: ${({ theme }) => theme.colors.primary};
        padding-right: 16px;
    }
    color: ${({ theme }) => theme.colors.site.text};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.2;
    }
`;