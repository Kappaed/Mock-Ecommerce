import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root {
    --light-border-color: rgb(232,232,232);
    --body-padding-top: 40px;
    --main-margin-y: 80px;
    --hover-link-opacity : 0.6;

  }

  body {
    line-height: 1.4;
    background: white;
    font-family: 'Roboto', sans-serif;
  }

  
  a { 
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button { 
    display: inline-block;
    outline: none;
    border: none;
  }


`;

export default GlobalStyle;
