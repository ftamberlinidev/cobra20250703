function inicioJogo(){
    placar.nomeJogo="Jogo da Cobra"
    cobra.vida=3;
    cobra.cor="white";
    cobra.velocidade=2;
    trilha.play();
    jogar();
}

function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    apple.desenhar();
    if (apple.teveColisao(cobra)){
        placar.pontuacao+=apple.valor;
        cobra.crescer();
        cobra.velocidade++;
        comida.play();
        apple = new Apple(10);      
    }
    if (cobra.vida > 0){
        requestAnimationFrame(jogar);
    }
    else
    {
        trilha.pause();
        trilha.currentTime=0;
        gameover.play();
        placar.nomeJogo = "Fim de Jogo. Clique na tela para jogar...";
        placar.desenhar()  
    }

}

const trilha = new Audio();
trilha.src= "trilha.mp3";
const comida = new Audio();
comida.src= "comida.mp3";
const gameover = new Audio();
gameover.src= "gameover.mp3";
let apple = new Apple(10);
placar.nomeJogo="Clique na tela para começar o jogo..."
placar.desenhar();
tela.desenhar();

document.addEventListener("click",inicioJogo);
document.addEventListener("keydown",(evento) =>{  
    if ((evento.key== "8") && (cobra.direcao=="direita"  || cobra.direcao=="esquerda"))   cobra.direcao="cima";      
    if ((evento.key== "6") && (cobra.direcao=="cima"  || cobra.direcao=="baixo"))         cobra.direcao="direita";
    if ((evento.key== "2") && (cobra.direcao=="direita"  || cobra.direcao=="esquerda"))   cobra.direcao="baixo";
    if ((evento.key== "4") && (cobra.direcao=="cima"  || cobra.direcao=="baixo"))         cobra.direcao="esquerda";
})


