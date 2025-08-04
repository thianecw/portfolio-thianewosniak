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
background-color: #161616;
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
  font-size: 40px;
}

.swiper-pagination-bullet {
  background-color: #888888;
  opacity: 1;
  width: 10px;
  height: 10px;
}
  .swiper-pagination-bullet-active {
    background-color: #ef592d;
  }

  @media (max-width: 480px) {
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 30px;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
  }
  }
`;

export default globalStyles;
