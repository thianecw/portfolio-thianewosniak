import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background: linear-gradient(to bottom, #1e1e1e, #121212);
  color: white;
  padding: 60px 20px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 2px;
  color: #ff6b4a;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 20;
  width: 48px;
  height: 48px;
  background-color: rgba(255,255,255,0.1);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255,255,255,0.2);
  }

  &:disabled {
    display: none;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
