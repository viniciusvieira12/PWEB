let firstNumber = parseInt(prompt("Insira o primeiro numero: "));
let secondNumber = parseInt(prompt("Insira o segundo numero: "));

var soma = firstNumber + secondNumber;
var subtracao = firstNumber - secondNumber;
var produto = firstNumber * secondNumber;
var divisao = firstNumber / secondNumber;
var resto = firstNumber % secondNumber;

alert("A soma de " + firstNumber + " e " + secondNumber + " é: " + soma);
alert("A substração do numero " + firstNumber + " pelo numero " + secondNumber + " é: " + subtracao);
alert("O produto do numero " + firstNumber + " e o numero " + secondNumber + " é: " + produto);
alert("A divisão do numero " + firstNumber + " pelo numero " + secondNumber + " é: " + divisao);
alert("O resto da divisão do numero " + firstNumber + " pelo numero " + secondNumber + " é: " + resto);