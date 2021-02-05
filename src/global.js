import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    /* align-items: center; */
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    display: flex;
    font-family: Montserrat;
    /* height: 100vh; */
    justify-content: center;
    text-rendering: optimizeLegibility;
    padding: 30px 12px 28px;
    width: 100%;

    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      width: 100%;
      padding: 60px 15% 58px;
    }
  }
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    margin: 11.24px 0;

    color: ${({ theme }) => theme.primaryDark};

    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 24px;
      line-height: 29px;
      margin: 16px 0;
    }
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    margin: 0;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-align: center;
    color: ${({ theme }) => theme.primaryDark};

    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 18px;
      line-height: 22px;
    }
  }

  small {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    margin: 0;

    color: ${({ theme }) => theme.primaryGray};

    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
