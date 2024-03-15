import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    padding: 16px;
    font-family: 'Inter', sans-serif;
    transition: background 0.3s;
    color: ${({ theme }) => theme.color.black};
    font-size: 18px;
    letter-spacing: 0.05em;
    word-break: break-word;
    padding-bottom: 108px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      padding-bottom: 32;
    }
  }
`;