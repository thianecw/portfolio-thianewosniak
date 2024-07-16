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
