function copyEmail() {
  // Seleciona o elemento que contém o email
  var emailElement = document.getElementById("email");
  var emailText = emailElement.textContent;

  // Usa a API de Clipboard para copiar o texto
  navigator.clipboard.writeText(emailText).then(function() {
      // Sucesso ao copiar
      
      // Troca a imagem do botão
      var imgElement = document.getElementById("btn-copy-img");
      var originalSrc = imgElement.src;
      var originalAlt = imgElement.alt;

      imgElement.src = "https://img.icons8.com/ios/50/ffffff/checkmark--v1.png";
      imgElement.alt = "copied";

      // Reverte a imagem de volta ao original após 2 segundos
      setTimeout(function() {
          imgElement.src = originalSrc;
          imgElement.alt = originalAlt;
      }, 2000); // 2000 milissegundos = 2 segundos
  }, function(err) {
      // Erro ao copiar
      console.error("Erro ao copiar o email: ", err);
  });
}
const swiper = new Swiper('.slider-wrapper', {
loop: false,
grabCursor: true,
spaceBetween: 30,

pagination: {
el: '.swiper-pagination',
clickable: true,
dynamicBullets: true 

},

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

watchOverflow: true,
allowTouchMove: true,

breakpoints: {
  0: {
    slidesPerView: 1
  },
  620: {
    slidesPerView: 2
  },
  1024: {
    slidesPerView: 3
  },
},

on: {
  reachEnd: function () {
    this.navigation.nextEl.style.display = 'none';
  },
  fromEdge: function () {
    this.navigation.nextEl.style.display = '';
  }
}

});

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', function() {
      navbar.classList.toggle('active');
  });

  // Fechar o menu ao clicar fora dele em modo mobile
  document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768 && !navbar.contains(e.target) && !menuIcon.contains(e.target)) {
          navbar.classList.remove('active');
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  var dropDown = document.getElementById('dropDown');
  var dropDownMenu = document.querySelector('.drop-down');

  console.log('dropDown:', dropDown);
  console.log('dropDownMenu:', dropDownMenu);

  if (dropDown && dropDownMenu) {
    dropDown.addEventListener('click', function(event) {
      console.log('Dropdown clicked');
      event.stopPropagation();
      dropDownMenu.classList.toggle('drop-down--active');
    });

    document.addEventListener('click', function(event) {
      console.log('Document clicked');
      if (!dropDownMenu.contains(event.target) && !dropDown.contains(event.target)) {
        dropDownMenu.classList.remove('drop-down--active');
      }
    });
  } else {
    console.log('dropDown or dropDownMenu not found');
  }
});
