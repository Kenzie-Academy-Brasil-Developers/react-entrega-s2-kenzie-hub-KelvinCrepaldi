import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root {

    --white: #ffff;
    --black: #0d0d0d;

}

body{

    background-image: url(${background});
    background-size: 100% ;
    color: var(--black);
    display: flex;
    justify-content: center;
    
}

body, input, button{
    font-size: 1rem;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

h1, h2, h3, h4, p{
    text-align: center;
}

`;
