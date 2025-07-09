import styled from "styled-components";

export const MainContainer = styled.div`
margin-bottom: 100px;
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
color: ${({ theme }) => theme.mainText};

 @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 16px;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-items: center;
  padding: 40px 60px;
  gap: 15px;

 @media (max-width: 768px) {
  padding: 20px 16px;
}
`;

export const SkillBox = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const SkillTitle = styled.h3`
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: ${({ color }) => color || "#fff"};

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SkillImg = styled.div`
  img {
    width: 40px;
    height: 40px;
    background: none;

    ${({ $invert }) => $invert && "filter: invert(100%);"}

    @media (max-width: 480px) {
      width: 34px;
      height: 34px;
    }
  }
`;
