
//calcula e retorna o imc e as demais informações baseadas nesse imc
function calcImc() {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    if (altura === "" || peso === "" || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso (maiores que zero).");
        return;
    }

    altura = Number.parseFloat(altura);
    peso = Number.parseFloat(peso);

    let imc = peso / (altura * altura);
    let classificacao = "";
    let grau = "";

    if (imc < 18.5) {
        classificacao = "Magreza";
        grau = "0";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Normal";
        grau = "0";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
        grau = "I";
    } else if (imc >= 30 && imc <= 39.9) {
        classificacao = "Obesidade";
        grau = "II";
    } else {
        classificacao = "Obesidade Grave";
        grau = "III";
    }

    document.getElementById("valorImc").textContent = imc.toFixed(2);
    document.getElementById("classificacao").textContent = classificacao;
    document.getElementById("grau").textContent = grau;
}
