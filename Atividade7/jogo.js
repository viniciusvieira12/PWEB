let jogoIniciado = false;
let escolhaJogador = null;
let escolhaMaquina = null;

// Função chamada pelo botão "Jogar"
function iniciarJogo() {
  jogoIniciado = true;
  escolhaJogador = null;
  escolhaMaquina = null;
  alert("O jogo começou! Escolha entre Pedra, Papel ou Tesoura.");
}

// Função chamada pela opção clicada(pedra, papel ou tesoura)
function jogar(escolha) {
  if (!jogoIniciado) {
    alert("Clique no botão Jogar para iniciar o jogo.");
    return;
  }

  escolhaJogador = escolha;

  // Computador faz a escolha aleatoria
  const numeroAleatorio = Math.random(); // entre 0 (incluso) e 1 (excluso)
  if (numeroAleatorio < 0.33) {
    escolhaMaquina = 'pedra';
  } else if (numeroAleatorio < 0.66) {
    escolhaMaquina = 'papel';
  } else {
    escolhaMaquina = 'tesoura';
  }

  alert("Você escolheu: " + escolhaJogador);
  alert("A máquina escolheu: " + escolhaMaquina);

  const resultado = calcularResultado(escolhaJogador, escolhaMaquina);
  alert(resultado);

  jogoIniciado = false;
}

function calcularResultado(jogador, maquina) {
  if (jogador === maquina) {
    return "Empate! Ambos escolheram " + jogador;
  }

  if (
    (jogador === 'pedra' && maquina === 'tesoura') ||
    (jogador === 'papel' && maquina === 'pedra') ||
    (jogador === 'tesoura' && maquina === 'papel')
  ) {
    return "Você ganhou! " + jogador + " vence " + maquina;
  } else {
    return "Você perdeu! " + maquina + " vence " + jogador;
  }
}

