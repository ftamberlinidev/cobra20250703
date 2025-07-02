function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    apple.desenhar();
    if (apple.teveColisao(cobra)){
        placar.pontuacao+=apple.valor;
        apple = new Apple(10);      
    }
    requestAnimationFrame(jogar);
}
let apple = new Apple(10);
jogar();
document.addEventListener("keydown",(evento) =>{  
    if (evento.key== "w")         cobra.direcao="cima";      
    if (evento.key== "d")         cobra.direcao="direita";
    if (evento.key== "s")         cobra.direcao="baixo";
    if (evento.key== "a")         cobra.direcao="esquerda";
})


