// Retorna maior valor
function mostrarMaior() {
  let n1 = document.getElementById("maior1").value;
  let n2 = document.getElementById("maior2").value;
  let n3 = document.getElementById("maior3").value;

  if (n1 === "" || n2 === "" || n3 === "") {
    alert("Por favor, preencha todos os campos com números.");
    return;
  }

  n1 = Number.parseInt(n1);
  n2 = Number.parseInt(n2);
  n3 = Number.parseInt(n3);

  let maior = Math.max(n1, n2, n3);
  alert("O maior número é: " + maior);
}

// Retorna ordem crescente
function ordenarNumeros() {
  let n1 = document.getElementById("ordem1").value;
  let n2 = document.getElementById("ordem2").value;
  let n3 = document.getElementById("ordem3").value;

  if (n1 === "" || n2 === "" || n3 === "") {
    alert("Por favor, preencha todos os campos com números.");
    return;
  }

  n1 = Number.parseInt(n1);
  n2 = Number.parseInt(n2);
  n3 = Number.parseInt(n3);

  let numeros = [n1, n2, n3];
  numeros.sort((a, b) => a - b);

  alert("Números em ordem crescente: " + numeros[0] + " " + numeros[1] + " " + numeros[2]);
}

//Retorna se o texto inserido é palindromo
function verificarPalindromo() {
  let texto = document.getElementById("palavra").value;

  if (texto.trim() === "") {
    alert("Por favor, digite uma palavra ou frase.");
    return;
  }

  let formatado = texto.toUpperCase().replace(/[\s,-.;!?]/g, "");
  formatado = formatado.replace(/Á|À|Ã|Â/g, "A");
  formatado = formatado.replace(/É|È|Ê/g, "E");
  formatado = formatado.replace(/Í|Ì|Î/g, "I");
  formatado = formatado.replace(/Ó|Ò|Õ|Ô/g, "O");
  formatado = formatado.replace(/Ú|Ù|Û/g, "U");
  formatado = formatado.replace(/Ç/g, "C");

  var invertido = [];

  for (var i = formatado.length - 1; i >= 0; i--) {
    invertido += formatado[i];
  }

  if (formatado === invertido) {
    alert("A frase é um palíndromo!");
  } else {
    alert("A frase não é um palíndromo.");
  }
}

//Retorno se é triangulo, e o tipo de triangulo
function verificarTriangulo() {
  let l1 = document.getElementById("lado1").value;
  let l2 = document.getElementById("lado2").value;
  let l3 = document.getElementById("lado3").value;

  if (l1 === "" || l2 === "" || l3 === "") {
    alert("Por favor, preencha todos os campos com números.");
    return;
  }
  
  if (l1 <= 0 || l2 <= 0 || l3 <= 0) {
    alert("Por favor, preencha com números maiores que zero.");
    return;
  }

  l1 = Number.parseInt(l1);
  l2 = Number.parseInt(l2);
  l3 = Number.parseInt(l3);

  if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
    if (l1 === l2 && l2 === l3) {
      alert("Triângulo equilátero.");
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
      alert("Triângulo isósceles.");
    } else {
      alert("Triângulo escaleno.");
    }
  } else {
    alert("Esses valores não formam um triângulo.");
  }
}
