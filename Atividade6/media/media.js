let nome = prompt("Insira o seu nome: ");
let notas = [];
let media = 0;

for (let i = 1; i <= 4; i++) {
    let nota = parseFloat(prompt("Insira a sua " + i + "ª nota, um número de 0 a 10: "));
    notas.push(nota);
    media += nota;
}

media /= 4;
alert(nome + ", a sua média foi: " + media);
