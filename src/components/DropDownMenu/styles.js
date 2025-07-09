import styled from "styled-components";

export const TableCenter = styled.div`
display: table-cell;
vertical-align: middle;
`;

export const DropDown = styled.div`
display: none;
position: relative;


 @media (max-width: 768px) {
    display: inline-block; 
    padding: 0 10px;
    cursor: pointer;
    border: none;
	  margin-left: auto; 
  }`;

export const DropDownButton = styled.button`
padding: 0 10px;
cursor: pointer;
border: none;
background-color: #161616;

`;

export const DropDownMenuBox = styled.div.withConfig({
	// impede que a prop isOpen vá para o DOM
	shouldForwardProp: (prop) => prop !== "isOpen",
})`
  position: absolute;
  width: 120px;
  left: 0;
  background-color: #161616;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  margin-top: 5px;
  margin-left: -30px;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;

  /* No mobile, controla pela prop isOpen */
  @media (max-width: 768px) {
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  }
`;

export const DropDownItems = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 8px 10px;
  text-align: left;
  font-weight: 400;
  color: #eeeeee;
  cursor: pointer;
  
a {
	 position: relative;
    margin: 8px 0;
    padding-bottom: 6px;
    text-decoration: none;
    color: inherit;
	transition: color 0.3s ease-in-out; 
	
	&:active {
    color: ${({ theme }) => theme.mainText};
	}

	 &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.5);
    }

  }
`;
