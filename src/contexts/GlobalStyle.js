import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    //<------------------------------Headings fonts------------------------------------>
    --ff-heading-normal: "Freight_Text_Medium", serif;
    --ff-heading-bold: "Freight_Text_Bold", cursive;
    --ff-heading-light: "Freight_Text_Light", cursive;
    //<------------------------------Body fonts------------------------------------>
    --ff-body-normal: "BasisGrotesquePro_Regular", serif;
    --ff-body-bold: "BasisGrotesquePro_Bold", cursive;
    --ff-body-light: "BasisGrotesquePro_Light", cursive;
    //<------------------------------Sample Colors------------------------------------>
    //--clr-primary-100: #9dace0;
    //--clr-primary-200: #6d7db4;
    //--clr-primary-300: #4f5c8d;
    //--clr-primary-400: #2f3b64;
    //--clr-primary-500: #131b3a;
    //<------------------------------Marta Colors------------------------------------>
    --clr-primary-100: #f0ead2;
    --clr-primary-200: #dde5b6;
    --clr-primary-300: #adc178;
    --clr-primary-400: #a98467;
    --clr-primary-500: #6c584c;
    //<------------------------------Marta Colors------------------------------------>  

    --fs-base: 1rem;
    --clr-accent: #85ff9e;

    --clr-tertiary: #f148fb;
    --clr-tertiary-500: #662269;

    --clr-light: #fff;
    --clr-dark: #000;

    --clr-gradient: radial-gradient(var(--clr-tertiary-500),
    var(--clr-primary-400),
    var(--clr-primary-500));
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: var(--ff-heading-normal);
    background-color: var(--clr-primary-100);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    max-width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  a:active,
  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  .rec.rec-slider-container {
    margin: 1rem
  }

  .rec.rec-arrow,
  .rec.rec-arrow-left,
  .rec.rec-arrow-right,
  .rec.rec-arrow-left:enabled,
  .rec.rec-arrow-right:enabled,
  .rec.rec-arrow-right:visited {
    background-color: var(--clr-primary-300);
    box-shadow: 0 0 1px 3px var(--clr-primary-200);
  }

  .rec.rec-arrow-left:hover:enabled,
  .rec.rec-arrow-right:hover:enabled {
    background-color: var(--clr-primary-400);
    box-shadow: 0 0 1px 3px var(--clr-primary-400);
  }

  .rec.rec-carousel-item:hover{
    background-color: rgba(0,0,0,0.2);
    border-radius: 10px;
  }

  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    background-color: var(--clr-dark);
  }

  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }

  button.rec-dot_active {
    background-color: var(--clr-primary-300);
    box-shadow: 0 0 1px 3px var(--clr-primary-200);
  }
  
  
`;

export default GlobalStyle;