import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
color:  #fff;

background-image: linear-gradient(to bottom right, #113390, #0a0133);
background-repeat: no-repeat;

min-height: 100vh;
display: flex;
flex-direction: column;
}



code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ol,
ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.list {
  list-style: none;
}

#root {
flex-grow: 1
}
`;
