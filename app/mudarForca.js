let imagem = document.querySelector(".img-forca");
let chances = 0;

function MudarImagem() {
    console.log(chances);
    console.log(imagem);
    if (chances === 0) {
        imagem.src = "/jogo-da-forca/assets/forca-cabeca.png";
    } else if (chances === 1) {
        imagem.src = "/jogo-da-forca/assets/forca-cabeca-corpo.png";
    } else if (chances === 2) {
        imagem.src = "/jogo-da-forca/assets/forca-cabeca-corpo-braco.png";
    } else {
        imagem.src = "/jogo-da-forca/assets/forca-cabeca-corpo-braco-perna.png";
        window.alert("Você perdeu!")
    } 

    chances += 1
}