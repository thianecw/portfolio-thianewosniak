import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  max-width: 400px;
  width: 100%;
  min-width: 280px;
  margin: 0 auto 50px auto;
  color: #fff;
  text-align: center;
  min-height: 500px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;

  @media (max-width: 480px) {
    min-height: 500px;
    min-width: 400px;
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

export const ProjectImage = styled.img`
  width: 70%;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(0.95);
  }
`;

export const ProjectName = styled.h2`
  font-size: 1.3rem;
  font-weight: 300;
  margin-top: 15px;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  display: -webkit-box;

`;

export const ProjectLink = styled.a`
  display: block;
`;

export const GitLink = styled.a`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;

  i {
    font-size: 30px;
    margin-top: 10px;
    color: white;
    transition: transform 0.3s ease;

    &:hover {
      color: #ff5722;
      opacity: 0.7;
      transform: scale(110%);
    }
  }
`;
