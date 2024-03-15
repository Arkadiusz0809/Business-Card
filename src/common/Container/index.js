import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    background: ${({ theme }) => theme.colors.site.background};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 8px; 
    }
`;