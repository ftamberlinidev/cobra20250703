class Apple {
    arqImagem="apple.png";
    imagem;
    desenhar(){
        this.imagem = new Image();
        this.imagem.src = this.arqImagem;
        ctx.drawImage(this.imagem, 500, 300, 20, 20 
        );
    }
}