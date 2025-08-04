import { MainContainer, ContainerLeft, ContainerRight, Title, Button } from "./styles";
import profileImg from "../../assets/profileImg.webp";

export function Home() {
	return (
		<MainContainer>
			<ContainerLeft>
			</ContainerLeft>

			<ContainerRight>

				<img src={profileImg} alt="Imagem de perfil" />
				<h1> Thiane Wosniak </h1>
				<h2> Desenvolvedora full-stack</h2>

				<Title>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						fill="#eeeeee"
						viewBox="0 0 256 256"
						aria-labelledby="leftArrowTitle"
					>
						<title id="leftArrowTitle">Ícone de seta para a esquerda</title>
						<path d="M207.23,203.42a8,8,0,0,1-10.66,3.81l-152-72a8,8,0,0,1,0-14.46l152-72a8,8,0,1,1,6.85,14.46L66.69,128l136.73,64.77A8,8,0,0,1,207.23,203.42Z" />
					</svg>

					<span>sobre mim</span>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						fill="#eeeeee"
						viewBox="0 0 256 256"
						aria-labelledby="rightArrowTitle"
					>
						<title id="rightArrowTitle">Ícone de seta para a direita</title>
						<path d="M224,128a8,8,0,0,1-4.58,7.23l-152,72a8,8,0,1,1-6.85-14.46L197.31,128,60.58,63.23a8,8,0,1,1,6.85-14.46l152,72A8,8,0,0,1,224,128Z" />
					</svg>
				</Title>

				<p>
					Enfermeira migrando pra área <strong>tech</strong>, estudando <strong>Análise e Desenvolvimento de Sistemas</strong>. 					Tenho experiência em desenvolvimento web – sites, landing pages e aplicações <strong>Fullstack</strong>
				</p>

				<Button onClick={() => window.open("https://wa.me/5547992182468", "_blank")}>
					Fale comigo
				</Button>
			</ContainerRight>
		</MainContainer>
	);
}
