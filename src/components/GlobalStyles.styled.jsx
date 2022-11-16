import { css } from '@emotion/react';

export const GlobalStyles = css`
h1,
h2,
h3,
h4,
h5,
p {
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
}

ul,
ol {
  list-style: none;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  
}

a {
  text-decoration: none;
}
 #root {
  
  background: linear-gradient(to bottom right, #4b484b, #7d7b7de9, #4f575c);
    border-radius: 6px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
      @media screen and (min-width: 480px) {
    width: 480px;
      }
      @media screen and (min-width: 768px) {
    width: 768px;
      }
      @media screen and (min-width: 1200px) {
    width: 1200px;
      }
}

}`