let palavras = [
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
]; // Array de palavras a serem adivinhadas
let dicas = ["Animal", "Fruta", "País", "Veículo", "Linguagem de Programação"]; // Array de dicas correspondentes às palavras
let arr; // letiável que vai conter a palavra atual em formato de array
let tentativas = 0; // Contador de tentativas erradas
let num = Math.floor(Math.random() * 25); // Índice da palavra atual
let forcaImagem = document.querySelector("#forca-img"); // Seleciona a imagem da forca
let botaoResposta = document.querySelector("#resButton"); // Seleciona o botão para responder a palavra inteira
let letrasEscolhidas = []; // cria um array vazio para ser adicionado as letras que vão sendo escolhidas
let palavra = document.getElementById("palavra") //Seleciona a tag <p> com id palavra
let dica = document.getElementById("dica") //Seleciona a tag <span> com id dica
let letraInput = document.getElementById("letraInput") //Seleciona o input em que vai ser digitado a letra
let jogarDeNovoBotao = document.getElementById("jogar-de-novo") //Seleciona o botão de jogar novamente
botaoResposta.addEventListener("click", res); // Adiciona o evento de click e chama a função res() no botão resposta

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
  letrasEscolhidas = [];
  num = Math.floor(Math.random() * 25); // Índice da palavra atual
  // Função para iniciar o jogo
  console.log(geradorDeDicas());
  console.log(palavras[num]);
  arr = new Array(palavras[num].length).fill("_"); // Inicializa o array com sublinhados do tamanho da palavra atual
  palavra.innerHTML = arr.join(" "); // Exibe a palavra atual (como sublinhados) na página
  dica.innerHTML = geradorDeDicas(); // Exibe a dica atual na página
}

//Função para verificar se o input da letra está vazio ou não
function escolher(){
  if (letraInput.value.length == 0){
    alert("Escolha uma letra!")
  } else {
    jogar() // Se não estiver vazio, chama a função jogar() normalmente
  }
}

function jogar() {
  // Função para jogar
  let letra = document.getElementById("letraInput").value.toLowerCase(); // Pega a letra digitada pelo usuário e a transforma em minúscula

  if (letrasEscolhidas.includes(letra)) {
    alert("Letra já escolhida, tente outra!");
    letraInput.value = ""; // Limpa o campo de entrada
  } else {
    if (arr.includes("_") && tentativas < 5) {
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
        MudarImagem();
      }
      palavra.innerHTML = arr.join(" "); // Converte em string e junta por meio do espaço/ Atualiza a exibição da palavra na página
      letraInput.value = ""; // Limpa o campo de entrada
      if (!arr.includes("_")) {
        // Se todas as letras foram adivinhadas
        num = Math.floor(Math.random() * 25); // Gera um valor aleatório de 0 a 24
        if (num < palavras.length) {
          // Se ainda há palavras a serem adivinhadas
          tentativas = 0
          MudarImagem()
          jogar(); // Inicia o jogo com a próxima palavra
        }
        
        iniciarJogo(); // Chama a função res automaticamente após uma tentativa bem-sucedida
      }
    }
  }

  letrasEscolhidas.push(letra);
}
function res() {
  let palavraRes = document.getElementById("resInput").value.toLowerCase();
  if (palavraRes == palavras[num]) {
    let mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Parabéns, você acertou!";
    palavraRes.value = ""; // Limpa o campo de entrada
    jogarDeNovoBotao.style.display = "block"; // Exibe o botão "Jogar de novo"
  } else {
    if (palavraRes.length == 0) {
      alert("Digite uma palavra válida!");
    } else {
      alert("Você errou!");
      tentativas = 0;
      palavraRes.value = ""; // Limpa o campo de entrada
      iniciarJogo(); // Inicia o jogo automaticamente
    }
  }
}
