import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./loading-icon.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    text-align: center;
    margin-top: 88px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
    display: grid;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
        margin-top: 32px;
    }
`;

export const StyledSpinner = styled(Spinner)`
    animation: ${rotate} 1s linear infinite;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 24px auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
       margin-top: 32px;
       width: 60px;
    }
`;
