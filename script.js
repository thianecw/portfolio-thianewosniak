const copyEmail = () => {
	// Seleciona o elemento que contém o email
	const emailElement = document.getElementById("email");
	const emailText = emailElement.textContent;

	// Usa a API de Clipboard para copiar o texto
	navigator.clipboard.writeText(emailText).then(
		() => {
			// Sucesso ao copiar

			// Troca a imagem do botão
			const imgElement = document.getElementById("btn-copy-img");
			const originalSrc = imgElement.src;
			const originalAlt = imgElement.alt;

			imgElement.src = "https://img.icons8.com/ios/50/ffffff/checkmark--v1.png";
			imgElement.alt = "copied";

			// Reverte a imagem de volta ao original após 2 segundos
			setTimeout(() => {
				imgElement.src = originalSrc;
				imgElement.alt = originalAlt;
			}, 2000);
		},
		(err) => {
			// Erro ao copiar
			console.error("Erro ao copiar o email: ", err);
		},
	);
};

const swiper = new Swiper(".slider-wrapper", {
	loop: false,
	grabCursor: false,
	spaceBetween: 30,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	watchOverflow: true,
	allowTouchMove: true,

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		620: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},

	on: {
		reachEnd: function () {
			this.navigation.nextEl.style.display = "none";
		},
		fromEdge: function () {
			this.navigation.nextEl.style.display = "";
		},
	},
});
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
