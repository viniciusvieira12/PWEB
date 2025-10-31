// Settando variáveis id e src
var janela = document.getElementById('janela');
var titulo = document.getElementById('titulo');

var imgFechada = "images/janela-fechada.jpg";
var imgAberta = "images/janela-aberta.jpg";
var imgQuebrada = "images/janela-quebrada.jpg";

// Evento para abrir janela
janela.addEventListener("mouseover", function() {
    janela.src = imgAberta;
    titulo.textContent = "Janela Aberta";
});

// Evento para fechar janela
janela.addEventListener("mouseout", function() {
    janela.src = imgFechada;
    titulo.textContent = "Janela Fechada";
});

// Evento para janela quebrada
janela.addEventListener("click", function() {
    janela.src = imgQuebrada;
    titulo.textContent = "Janela Quebrada";
});
