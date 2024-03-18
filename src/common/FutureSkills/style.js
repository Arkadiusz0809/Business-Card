import styled from "styled-components";

export const Section = styled.div`
    margin: 73px auto;
    background: ${({theme})=> theme.colors.boxBackground};
    padding: 32px;
    max-width: 1216px;
    box-shadow: ${({ theme }) => theme.boxShadow};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 16px;
        margin: 24px auto;
    } 
`;

export const Title = styled.h2 `
    font-weight: 900;
    font-size: 30px;
    color: ${({theme}) => theme.colors.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    } 
`;

export const List = styled.li`
    list-style: none;
    border-top: 1px solid ${({theme}) => theme.colors.buttonLink.border};
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 115px;
    font-weight: 400;
    font-size: 18px;
    padding: 32px 0 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        font-size: 14px;
    } 
`;

export const ListItem = styled.li`
    &:before {
        content: "•";
        color: ${({theme}) => theme.colors.primary};
        padding-right: 16px;
    }
    color: ${({ theme }) => theme.colors.site.text};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding-right: 6px;
    } 
`;