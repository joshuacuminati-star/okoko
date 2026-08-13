function fazePergunta(){
    confirm("bem vindo, preparado para continuar?");

    let resposta = prompt("qual seu tipo de jogo favorito?/n1 - RPG/n2 - Soulslike/n3 - Shooter");
    switch(resposta){
        case"1":
        alert("ah, ótima escolha, jogos longos com boa história e estilo unico, são os melhores!");
        break;
        case"2":
        alert("Perfeito, jogos difíceis onde disciplina e prática levam a perfeição, são difíceis de gostar mas muito bons quando se domina!");
        break;
        case"3":
        alert("um estilo pratico, e bom, é otímo atirar sem rumo para relxar!");
        break;
        
    }
}
fazePergunta()