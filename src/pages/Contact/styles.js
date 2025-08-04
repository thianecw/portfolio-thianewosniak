import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-bottom: 30px;
background-color: #161616;
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

export const ContactBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`;

export const ContactIcons = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px 0 20px 0;


  svg {
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
      color: #eeeeee;


    &:hover {
      opacity: 0.7;
	  	transform: scale(110%);

    }
  }
`;
