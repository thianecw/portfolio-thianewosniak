import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-style: normal;
  }

  body {
    background-color: #212121;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
  }

  button, a {
    cursor: pointer;
  }

.swiper-button-prev,
.swiper-button-next {
  background: transparent !important;
  border: none;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  color: #ef592d;
  background: transparent;
  text-decoration: none;
}

    .swiper-pagination-bullet {
    background-color: #888888;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #ef592d;
  }
`;

export default globalStyles;
