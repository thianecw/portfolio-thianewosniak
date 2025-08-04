import styled from "styled-components";
import b2 from "../../assets/bg2.jpg";

export const MainContainer = styled.div`
  display: flex;
  margin-bottom: 100px;
  background-color: #212121;
  width: 100%;
  min-height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ContainerLeft = styled.div`
  width: 40%;
  position: relative;
  overflow: hidden;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url(${b2}) center/cover no-repeat;
    opacity: 0.7;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(33, 33, 33, 0.6) 50%,
      rgba(33, 33, 33, 0.4) 100%,
      transparent 100%
    );
    z-index: 1;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ContainerRight = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-top: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
    padding: 20px;
  }

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 50%;
    margin-bottom: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

    @media (max-width: 480px) {
      height: 200px;
      width: 180px;
    }
  }

  h1 {
    font-size: 26px;
    font-weight: 100;
    letter-spacing: 4px;
    color: #ffffff;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

  h2 {
    color: #dddddd;
    margin: 10px 0;
    font-weight: 200;
    font-size: 21px;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 20px;
    text-align: center;
    color: #eeeeee;
    justify-self: center;
    margin-bottom: 10px;
     line-height: 2; 

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 36px;
    }
  }
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px; /* espaço entre ícones e texto */
  margin: 30px 0 50px 0;
  color: ${({ theme }) => theme.mainText};
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;

  svg {
    flex-shrink: 0; /* evita encolher */
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    letter-spacing: 3px;
    margin-bottom: 30px;
    gap: 8px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.mainText};
  color: #eeeeee;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  margin-top: 20px;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.mainText};
    border: 1px solid ${({ theme }) => theme.mainText};
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
    @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
