import styled from "styled-components";

export const Section = styled.div`
    margin: auto;
    background: ${({theme})=> theme.color.white};
    padding: 32px;
    max-width: 1216px;
    box-shadow: 
    0px 16px 58px 0px ${({theme}) => theme.color.violet},
    0px -2px 50px 0px ${({theme}) => theme.color.violet};

`;

export const Title = styled.h2 `
    font-weight: 900;
    font-size: 30px;
    color: ${({theme}) => theme.color.mineshaft};
    margin: 0;
    letter-spacing: 2px;
    word-wrap: break-word;
    padding-bottom: 13px;
`;

export const List = styled.li`
    list-style: none;
    border-top: 1px solid ${({theme}) => theme.color.iron};
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 115px;
    font-weight: 400;
    font-size: 18px;
    padding-top: 16px;
    padding: 32px 0 0 0;
`;

export const ListItem = styled.li`
    &:before {
        content: "•";
        color: ${({theme}) => theme.color.scienceblue};
        padding-right: 16px;
    }
    color: ${({ theme }) => theme.color.slategray};

`;