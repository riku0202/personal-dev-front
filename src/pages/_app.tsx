import type { AppProps } from "next/app";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../styles/globals.css";

const theme = {
  colors: {
    primary: "rgb(35, 39, 47)",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Sawarabi Mincho', sans-serif;
    font-size: 0.625em;
    font-weight: 400;
    text-align: justify;
    box-sizing: border-box;
    letter-spacing: 1px;
    overflow-x:hidden;
  }
  a{
    text-decoration: none;
    color: #111111;
  }
  input{
          border: none;
          outline: none;
  }
  button {
    font: inherit;
          cursor: pointer;
          border: none;
          outline: none;
          appearance: none;
  }
  img {
    max-width: 100%;
    display: block;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
