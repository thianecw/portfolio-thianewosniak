import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
	flex-direction: column;
	text-align: center;
	background-color: #161616;
	color: #eeeeee;

    p {
	font-size: 15px;
	padding: 10px;
    background-color: inherit;
	margin-bottom: 0;
	padding: 20px;

	 @media (max-width: 480px) {
    font-size: 14px;
  }
}
`