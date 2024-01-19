let dicas = ["Animal", "Fruta", "País", "Veículo", "Linguagem de Programação"]; // Array de dicas correspondentes às palavras
let dica = document.querySelector("#dica"); //Seleciona a tag <span> com id dica

let arr; // letiável que vai conter a palavra atual em formato de array
let tentativas = 0; // Contador de tentativas erradas
let num = Math.floor(Math.random() * 47); // Índice da palavra atual

let forcaImagem = document.querySelector("#forca-img"); // Seleciona a imagem da forca

let letrasEscolhidas = []; // cria um array vazio para ser adicionado as letras que vão sendo escolhidas
let palavra = document.querySelector("#palavra"); //Seleciona a tag <p> com id palavra
let mensagem = document.querySelector("#mensagem");

let letraInput = document.querySelector("#letraInput"); //Seleciona o input em que vai ser digitado a letra
let palavraRes = document.querySelector("#resInput");

let jogarDeNovoBotao = document.querySelector("#jogar-de-novo"); //Seleciona o botão de jogar novamente
let letraButton = document.querySelector("#letraButton")
let botaoResposta = document.querySelector("#resButton"); // Seleciona o botão para responder a palavra inteira
botaoResposta.addEventListener("click", res); // Adiciona o evento de click e chama a função res() no botão resposta

function geradorDeDicas() {
  if (num <= 9) {
    return dicas[0];
  } else if (num > 9 && num <= 19) {
    return dicas[1];
  } else if (num > 19 && num <= 29) {
    return dicas[2];
  } else if (num > 29 && num <= 39) {
    return dicas[3];
  } else {
    return dicas[4];
  }
}

function iniciarJogo() {   // Função para iniciar o jogo
  letrasEscolhidas = [];
  num = Math.floor(Math.random() * 47); // Índice da palavra atual
  console.log(geradorDeDicas());
  console.log(palavras[num]);
  arr = new Array(palavras[num].length).fill("_"); // Inicializa o array com sublinhados do tamanho da palavra atual
  palavra.innerHTML = arr.join(" "); // Exibe a palavra atual (como sublinhados) na página
  dica.innerHTML = geradorDeDicas(); // Exibe a dica atual na página
}

function escolher() {
  if (letraInput.value.length == 0) {
    alert("Escolha uma letra!");
  } else {
    if (tentativas == 3) {
      MudarImagem();
      mensagem.innerHTML = `Que pena, você perdeu!<br>  A resposta é <span id="resposta">${palavras[num]}</span>`
      esconderBotoes()
      jogarDeNovoBotao.style.display = "flex"; // Exibe o botão "Jogar de novo"
      letraInput.disabled = true;
      palavraRes.disabled = true;
      letraInput.value = ""
    } else {
      jogar();
    }
  }
}

function jogar() {
  // Função para jogar
  let letra = document.getElementById("letraInput").value.toLowerCase(); // Pega a letra digitada pelo usuário e a transforma em minúscula

  if (letrasEscolhidas.includes(letra)) {
    alert("Letra já escolhida, tente outra!");
    letraInput.value = ""; // Limpa o campo de entrada
  } else {
    if (arr.includes("_")) {
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
        console.log(tentativas);
        MudarImagem();
      }
      palavra.innerHTML = arr.join(" "); // Converte em string e junta por meio do espaço/ Atualiza a exibição da palavra na página
      letraInput.value = ""; // Limpa o campo de entrada
      if (!arr.includes("_")) {
        // Se todas as letras foram adivinhadas
        num = Math.floor(Math.random() * 47); // Gera um valor aleatório de 0 a 24
        if (num < palavras.length) {
          // Se ainda há palavras a serem adivinhadas
          tentativas = 0;
          MudarImagem();
          jogar(); // Inicia o jogo com a próxima palavra
        }

        mensagem.innerHTML = "Parabéns, você acertou!"
        esconderBotoes()
        jogarDeNovoBotao.style.display = "flex"; // Exibe o botão "Jogar de novo"
        
      }
    }
  }

  letrasEscolhidas.push(letra);
}

function res() {
  if (palavraRes.value.length == 0){
    alert("Digite uma palavra válida!")
  } else {
    if (palavraRes.value.toLowerCase() == palavras[num]){
      palavra.innerHTML = palavras[num]
      mensagem.innerHTML = "Parabéns, você acertou!";
      esconderBotoes()
      palavraRes.value = ""; // Limpa o campo de entrada
      jogarDeNovoBotao.style.display = "flex"; // Exibe o botão "Jogar de novo"
    } else {
      mensagem.innerHTML = `Que pena, você perdeu!<br>  A resposta é <span id="resposta">${palavras[num]}</span>`
      jogarDeNovoBotao.style.display = "flex"; // Exibe o botão "Jogar de novo"
      esconderBotoes()
      letraInput.disabled = true;
      palavraRes.disabled = true;
      palavraRes.value = ""; // Limpa o campo de entrada
    }
  }

}

function jogarDeNovo() {
  mensagem.innerHTML = ""
  tentativas = 0;
  MudarImagem();
  iniciarJogo();
  mostrarBotoes();
  jogarDeNovoBotao.style.display = "none"; // Exibe o botão "Jogar de novo"
  letraInput.disabled = false;
  palavraRes.disabled = false;
}

function esconderBotoes(){
  let formInput = document.querySelector("#formInput");
  let formRes = document.querySelector("#formRes")
  formInput.style.display = "none"
  formRes.style.display = "none"
}

function mostrarBotoes(){
  let formInput = document.querySelector("#formInput");
  let formRes = document.querySelector("#formRes")
  formInput.style.display = "flex"
  formRes.style.display = "flex"
}