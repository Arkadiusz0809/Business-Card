import styled from "styled-components";

export const Container = styled.div`
    margin: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 8px; 
    }
`;