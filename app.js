var palavras = ["girafa", "banana", "espanha"]; // Array de palavras a serem adivinhadas
var dicas = ["Animal", "Fruta", "País"]; // Array de dicas correspondentes às palavras
var arr; // Variável que vai conter a palavra atual em formato de array
var tentativas = 0; // Contador de tentativas erradas
var indice = 0; // Índice da palavra atual

function iniciarJogo() { // Função para iniciar o jogo
    arr = new Array(palavras[indice].length).fill("_"); // Inicializa o array com sublinhados do tamanho da palavra atual
    document.getElementById("palavra").innerHTML = arr.join(" "); // Exibe a palavra atual (como sublinhados) na página
    document.getElementById("dica").innerHTML = dicas[indice]; // Exibe a dica atual na página
}

function jogar() { // Função para jogar
    let letra = document.getElementById("letraInput").value.toLowerCase(); // Pega a letra digitada pelo usuário e a transforma em minúscula
    if (arr.includes("_") && tentativas < 6) { // Se ainda há letras a serem adivinhadas e o número de tentativas erradas é menor que 6
        if (palavras[indice].includes(letra)) { // Se a palavra atual contém a letra digitada
            for (let i = 0; i < palavras[indice].length; i++) { // Para cada letra da palavra atual
                if (palavras[indice][i] === letra) { // Se a letra da palavra atual é igual à letra digitada
                    arr[i] = letra; // Substitui o sublinhado pela letra na posição correspondente
                }
            }
        } else { // Se a palavra atual não contém a letra digitada
                tentativas++; // Incrementa o número de tentativas erradas
        }
        document.getElementById("palavra").innerHTML = arr.join(" "); // Converte em string e junta por meio do espaço/ Atualiza a exibição da palavra na página
        document.getElementById("letraInput").value = "";  // Limpa o campo de entrada

        if (!arr.includes("_")) { // Se todas as letras foram adivinhadas
            indice++; // Incrementa o índice para a próxima palavra
            if (indice < palavras.length) { // Se ainda há palavras a serem adivinhadas
                iniciarJogo(); // Inicia o jogo com a próxima palavra
            }
        }
    }
}

iniciarJogo(); // Inicia o jogo automaticamente