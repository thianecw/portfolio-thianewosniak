import styled from "styled-components";

export const NavBar = styled.nav`
background-color: #161616;
border-bottom: ${({ theme }) => theme.border};
display: flex;
justify-content: center; 
align-items: center;
width: 100%;
padding: 30px;

@media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const NavBarItems = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 60px; 
background-color: inherit;

  a {
    color: ${({ theme }) => theme.mainText};
	display: inline-block;
	text-decoration: none;
	letter-spacing: 0.2rem;
	text-decoration: none;
	font-weight: 300;
	font-size: 20px;
	cursor: pointer;
	margin: 8px;
	transition: opacity .35s ease-in-out;
	margin: 0 30px;
	background-color: inherit;


    @media (max-width: 768px) {
    display: none
  }
  }

  a::after {
	content: "";
	position: absolute;
	left: 0;
	bottom: -10px;
	/*underline*/
	width: 0;
	height: 2px;
	transition: width 0.5s ease;
}

a:hover::after {
	width: 100%;
}

a:hover {
	opacity: 0.6;
}
`;
