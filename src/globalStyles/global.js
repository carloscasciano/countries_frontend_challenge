import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;       
    }
    body {
        height: 100%;
        font: 15px 'Roboto', sans-serif;
        font-weight: 300;        
    }
    a {
        text-decoration: none;
        color: #242424;
    }
`;
