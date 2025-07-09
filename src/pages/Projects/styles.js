import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background: linear-gradient(to bottom, #1f1f1f, #121212);
  color: white;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 3px;
  padding: 15px;
  color: #ff4c29;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 16px;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 10;
  width: 40px;
  height: 40px;
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
    background-color: rgba(255,255,255,0.3);
  }

  &:disabled {
    display: none;
  }
`;
