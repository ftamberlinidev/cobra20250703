function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    apple.desenhar();

    requestAnimationFrame(jogar)

}

let apple = new Apple();

jogar();



document.addEventListener("keydown",(evento) =>{
     
    if (evento.key== "w")         cobra.direcao="cima";      
    if (evento.key== "d")         cobra.direcao="direita";
    if (evento.key== "s")         cobra.direcao="baixo";
    if (evento.key== "a")         cobra.direcao="esquerda";
   
})


