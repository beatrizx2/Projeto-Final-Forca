
let palavra = document.querySelector(".palavra")
let tema = document.querySelector(".tema")

let letras = document.querySelector("#letras")
let letrasEscolhidasArray = []


let palavras = ["amarelo", "azul", "vermelho", "branco", "preto", "carro", "moto", "barco", "avião", "bicicleta", "javascript", "python", "ruby", "assembly", "java"]
let numeroAleatorio = gerarNumeroAleatorio(0, 14)
let palavraAleatoria = palavras[numeroAleatorio]
let palavraDividida = palavraAleatoria.split('')
let qtdLetras = palavraDividida.length

let espacoParaLetras = "_ ".repeat(qtdLetras);
let arrayDeLetras = espacoParaLetras.split(' ');
espacoParaLetras = arrayDeLetras.join(' ')
letras.innerHTML = espacoParaLetras



function gerarNumeroAleatorio(min, max) {
    const numeroAleatorioDecimal = Math.random();
    const numeroAleatorio = Math.floor(numeroAleatorioDecimal * (max - min + 1)) + min;
    return numeroAleatorio;
}


function GerarPalavra(){

    console.log(palavraAleatoria);

    if (numeroAleatorio <= 4){
        tema.innerHTML = `<p class="tema">Tema: Cor</p>`
    } else if (numeroAleatorio > 4 && numeroAleatorio <= 9){
        tema.innerHTML = `<p class="tema">Tema: Veículo</p>`
    } else if (numeroAleatorio > 9 && numeroAleatorio <= 14){
        tema.innerHTML = `<p class="tema">Tema: Linguagem de programação</p>`
    }

    console.log(palavraDividida);
    console.log(qtdLetras);

    console.log(arrayDeLetras);
    console.log(espacoParaLetras)

}



function Tentar(){
    let letraEscolhida = document.querySelector("#letraEscolhida").value.toLowerCase();
    console.log(`A letra escolhida foi "${letraEscolhida}"`);

    if (letrasEscolhidasArray.includes(letraEscolhida)) {
        console.log("Você já escolheu essa letra!");
    } else {
        if (palavraDividida.includes(letraEscolhida)){

            let contador = 0;
            let contadorIndex = 1
            let index = []
            for (let i = 0; i < palavraDividida.length; i++){
                if(palavraDividida[i] === letraEscolhida){
                    index.push(contadorIndex)
                    contador ++
                    palavraDividida[i] = 0
                    arrayDeLetras[i] = letraEscolhida
                }
                contadorIndex ++
                console.log(`A letra ${letraEscolhida} aparece ${contador} nos indexes ${index}`);
                console.log(palavraDividida);
                espacoParaLetras = arrayDeLetras.join(' ')
                letras.innerHTML = espacoParaLetras

            }

            console.log(arrayDeLetras);
            

            console.log("Acertou");
        } else {
            MudarImagem()
            console.log("Errou");
        }
        letrasEscolhidasArray.push(letraEscolhida) 
    }

    
    console.log(letrasEscolhidasArray);



    
}

function atualizarPalavraExibida(){


}

console.log(palavraAleatoria);

