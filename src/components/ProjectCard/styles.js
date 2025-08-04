import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  width: 100%;
  max-width: 380px;
  padding: 20px;
  color: #eaeaea;
  text-align: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(4px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 480px;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    padding: 16px;
    max-width: 100%;
    min-height: 420px;
  }
`;

export const ProjectImage = styled.img`
  display: block;
  width: 100%;
  max-width: 200px;
  height: 200px;          
  object-fit: contain;   
  border-radius: 0.75rem;
  margin: 10px auto 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    max-width: 200px;
    max-height: 160px;
    margin-bottom: 12px;   /* reduzido para mobile */
  }
`;

export const ProjectName = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 8px;  /* adiciona margem inferior para controle */

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 6px;  /* reduzido no mobile */
  }
`;

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 10px 0;  /* tira margin-top, só margin-bottom */
  color: #ccc;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 30px; /* você pode reduzir mais se quiser */
  }
`;

export const ProjectLink = styled.a`
  display: block;
`;

export const GitLink = styled.a`
   display: inline-block;
  margin: 0 auto 0px;
  text-decoration: none;
      margin-bottom: 20px;


  i {

    font-size: 28px;
    color: #ff5722;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  @media (max-width: 480px) {
    i {
      font-size: 24px;
    }
  }
`;
