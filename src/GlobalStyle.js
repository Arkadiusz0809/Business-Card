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
    color: ${({ theme }) => theme.color.black};

  }
`;