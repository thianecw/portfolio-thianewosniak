import { DropDownMenu } from "../DropDownMenu";
import { NavBar, NavBarItems } from "./styles";

export function Header() {
	return (
		<NavBar>
			<NavBarItems>
				<a href="#about"> sobre mim </a>
				<a href="#skills"> skills </a>
				<a href="#projects"> projetos </a>
				<a href="#contact"> contato </a>
			</NavBarItems>
			<DropDownMenu />
		</NavBar>
	);
}
