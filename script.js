document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validação simples
    const nome = document.getElementById('nome').value;
    
    // A mensagem solicitada
    alert("roubei sua informaçoes");

    console.log("Sistema: Dados de " + nome + " capturados.");
    this.reset();
});