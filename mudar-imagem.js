function MudarImagem(){
    if (tentativas == 0) {
      forcaImagem.setAttribute("src", "assets/forca-img.png"); 
    } else if (tentativas === 1){
        forcaImagem.setAttribute("src", "assets/forca-cabeca.png"); 
    } else if (tentativas === 2){
      forcaImagem.setAttribute("src", "assets/forca-cabeca-corpo.png"); 
    } else if (tentativas === 3){
      forcaImagem.setAttribute("src", "assets/forca-cabeca-corpo-braco.png");
    } else if (tentativas === 4){
      forcaImagem.setAttribute("src", "assets/forca-cabeca-corpo-braco-perna.png"); 
    }
}