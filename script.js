const copyEmail = () => {
	// Seleciona o elemento que contém o email
	const emailElement = document.getElementById("email");
	const emailText = emailElement.textContent;

	// API de Clipboard para copiar o texto
	navigator.clipboard.writeText(emailText).then(
		() => {
			const imgElement = document.getElementById("btn-copy-img");
			const originalSrc = imgElement.src;
			const originalAlt = imgElement.alt;

			imgElement.src = "https://img.icons8.com/ios/50/ffffff/checkmark--v1.png";
			imgElement.alt = "copied";

			setTimeout(() => {
				imgElement.src = originalSrc;
				imgElement.alt = originalAlt;
			}, 2000);
		},
		(err) => {
			console.error("Erro ao copiar o email: ", err);
		},
	);
};

document.addEventListener("DOMContentLoaded", () => {
	const menuIcon = document.querySelector(".menu-icon");
	const navbar = document.querySelector(".navbar");

	menuIcon?.addEventListener("click", () => {
		navbar.classList.toggle("active");
	});

	// Fechar o menu ao clicar fora dele em modo mobile
	document.addEventListener("click", (e) => {
		if (
			window.innerWidth <= 768 &&
			!navbar.contains(e.target) &&
			!menuIcon.contains(e.target)
		) {
			navbar.classList.remove("active");
		}
	});

	const dropDown = document.getElementById("dropDown");
	const dropDownMenu = document.querySelector(".drop-down");

	if (dropDown && dropDownMenu) {
		dropDown.addEventListener("click", (event) => {
			event.stopPropagation();
			dropDownMenu.classList.toggle("drop-down--active");
		});

		document.addEventListener("click", (event) => {
			if (
				!dropDownMenu.contains(event.target) &&
				!dropDown.contains(event.target)
			) {
				dropDownMenu.classList.remove("drop-down--active");
			}
		});
	}
});
