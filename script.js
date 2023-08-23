// Objeto Game
class Game {
    constructor(titulo, preco, descricao, plataforma, imagem) {
        this.titulo = titulo;
        this.preco = preco;
        this.descricao = descricao;
        this.plataforma = plataforma;
        this.imagem = imagem;
    }
}

// Classe GamesList
class GamesList {
    constructor() {
        this.games = [];
    }

    adicionarJogo(titulo, preco, descricao, plataforma, imagem) {
        if (isAnyInputEmpty()) {
            sendMSG("Preencha todos os campos!", "error"); 
        }else if(!isURLValida(imagem)){
            sendMSG("URL da imagem inválida!", "error");
        }
        else{
            const jogo = new Game(titulo, preco, descricao, plataforma, imagem);
            this.games.push(jogo);
            sendMSG("Jogo adicionado com sucesso!", "success");
            clearInputs();
        }


    }
}

// Função para exibir jogos
function exibirJogos() {
    const gameList = document.getElementById("gameList");
    gameList.innerHTML = "";

    gamesList.games.forEach(jogo => {
        const cardDiv = `
            <div class="card">
                <img src="${jogo.imagem}" alt="${jogo.titulo}">
                <h2>${jogo.titulo}</h2>
                <p>Preço: R$${jogo.preco}</p>
                <p>Descrição: ${jogo.descricao}</p>
                <p>Plataforma: ${jogo.plataforma}</p>
            </div>
        `;

        gameList.innerHTML += cardDiv;
    });
}

// Instância da classe GamesList
const gamesList = new GamesList();

// Função para adicionar um jogo
function adicionarJogo() {
    const titulo = document.getElementById("titulo").value;
    const preco = document.getElementById("preco").value;
    const descricao = document.getElementById("descricao").value;
    const plataforma = document.getElementById("plataforma").value;
    const imagem = document.getElementById("imagem").value;

    gamesList.adicionarJogo(titulo, preco, descricao, plataforma, imagem);

    exibirJogos();
}

function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

function clearInputs(){
    // Limpa os campos de entrada após adicionar o jogo
    document.getElementById("titulo").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("plataforma").value = "";
    document.getElementById("imagem").value = "";
}

function sendMSG(msg,type){  
    // Como type vai ser a class, será ou error ou success
    const msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    const msgP = `
        <p class="${type}">${msg}</p>
    `;

    msgDiv.innerHTML += msgP;

    setTimeout(function(){
        msgDiv.innerHTML = "";
    }, 3000);
}

function isAnyInputEmpty(){
    const titulo = document.getElementById("titulo").value;
    const preco = document.getElementById("preco").value;
    const descricao = document.getElementById("descricao").value;
    const plataforma = document.getElementById("plataforma").value;
    const imagem = document.getElementById("imagem").value;

    if(titulo == "" || preco == "" || descricao == "" || plataforma == "" || imagem == ""){
        return true;
    } else {
        return false;
    }
}
