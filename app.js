var palavras = [
  "girafa",
  "macaco",
  "cachorro",
  "gato",
  "coelho",
  "banana",
  "laranja",
  "melancia",
  "abacaxi",
  "morango",
  "espanha",
  "brasil",
  "canada",
  "mexico",
  "austria",
  "carro",
  "moto",
  "bicicleta",
  "barco",
  "onibus",
  "javascript",
  "python",
  "ruby",
  "assembly",
  "java",
]; 
var dicas = ["Animal", "Fruta", "País", "Veículo", "Linguagem de Programação"]; 
var arr; 
var tentativas = 0; // Contador de tentativas erradas
var num = Math.floor(Math.random() * 25); // Índice da palavra atual
let forcaImagem = document.querySelector("#forca-img");

function geradorDeDicas() {
  if (num <= 4) {
    return dicas[0];
  } else if (num > 4 && num <= 9) {
    return dicas[1];
  } else if (num > 9 && num <= 14) {
    return dicas[2];
  } else if (num > 14 && num <= 19) {
    return dicas[3];
  } else {
    return dicas[4];
  }
}

function iniciarJogo() {
  // Função para iniciar o jogo
  console.log(geradorDeDicas());
  console.log(num);
  arr = new Array(palavras[num].length).fill("_"); // Inicializa o array com sublinhados do tamanho da palavra atual
  document.getElementById("palavra").innerHTML = arr.join(" "); // Exibe a palavra atual (como sublinhados) na página
  document.getElementById("dica").innerHTML = geradorDeDicas(); // Exibe a dica atual na página
}

function jogar() {
  // Função para jogar
  let letra = document.getElementById("letraInput").value.toLowerCase(); // Pega a letra digitada pelo usuário e a transforma em minúscula
  if (arr.includes("_") && tentativas < 6) {
    // Se ainda há letras a serem adivinhadas e o número de tentativas erradas é menor que 6
    if (palavras[num].includes(letra)) {
      // Se a palavra atual contém a letra digitada
      for (let i = 0; i < palavras[num].length; i++) {
        // Para cada letra da palavra atual
        if (palavras[num][i] === letra) {
          // Se a letra da palavra atual é igual à letra digitada
          arr[i] = letra; // Substitui o sublinhado pela letra na posição correspondente
        }
      }
    } else {
      // Se a palavra atual não contém a letra digitada
      tentativas++; // Incrementa o número de tentativas erradas
      // MudarImagem(); // A função MudarImagem() não está definida no código fornecido
    }
    document.getElementById("palavra").innerHTML = arr.join(" "); // Converte em string e junta por meio do espaço/ Atualiza a exibição da palavra na página
    document.getElementById("letraInput").value = ""; // Limpa o campo de entrada
    if (!arr.includes("_")) {
      // Se todas as letras foram adivinhadas
      num = Math.floor(Math.random() * 25); // Gera um valor aleatório de 0 a 24
      if (num < palavras.length) {
        // Se ainda há palavras a serem adivinhadas
        iniciarJogo(); // Inicia o jogo com a próxima palavra
      }
      res(); // Chama a função res automaticamente após uma tentativa bem-sucedida
    }
  }
}

function res() {
  // Remova o parâmetro event se não for necessário
  // let palavraRes = document.getElementById("resInput").value.toLowerCase();
  // if (palavraRes === palavras[num]) {
  if (document.getElementById("resInput").value.toLowerCase() === palavras[num]) {
    let mensagem = document.getElementById("mensagem").innerHTML = "Parabéns, você acertou!";
    document.getElementById("resInput").value = ""; // Limpa o campo de entrada
    document.getElementById("jogar-de-novo").style.display = "block"; // Exibe o botão "Jogar de novo"
  } else {
    tentativas = 0;
    document.getElementById("resInput").value = ""; // Limpa o campo de entrada
    iniciarJogo(); // Inicia o jogo automaticamente
  }
}

document.getElementById("jogar-de-novo").addEventListener("click", function() {
  tentativas = 0;
  iniciarJogo();
  this.style.display = "none"; // Oculta o botão "Jogar de novo"
});

iniciarJogo(); // Inicia o jogo automaticamente
