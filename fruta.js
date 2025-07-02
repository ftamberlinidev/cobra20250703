class Apple extends ObjetoJogo {
    arqImagem="apple.png";
    imagem;
    constructor(valor,...args){
        super(args);
        this.valor=valor;
        this.imagem = new Image();
        this.imagem.src = this.arqImagem;
    };
    desenhar(){
        ctx.drawImage(this.imagem, this.x, this.y
                      , this.tamanho, this.tamanho);
    }
}