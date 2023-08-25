// Primeira coisa que eu vou verificar é se meu JS está devidamente linkado no meu HTML.
console.log("O JS está linkado!");



// Entao para fazer acontecer algo eu preciso de uma funcao
// Vamos criar uma funcao para vericar se os inputs estao funcionando.
// Para isso, vamos criar uma funcao chamada verificarInputs.
// Tudo que esta dentro de uma funcao só executa quando a funcao/acao é chamada.
function verificarInputs() {
    // Vamos verificar se os inputs estao colecionando os dados corretamente.
    // Para isso, vamos criar uma variável para cada input.
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imgLink").value;

    // Vamos dar um console ou verbo consolar para cada variável.
    console.log("Titulo" + titulo);
    console.log({ preco });
    console.log({ descricao });
    console.log({ plataforma });
    console.log({ imgLink });

    // Vamos entao criar uma verificacao se os inputs estao vazios.
    // Pois se estao vazio eu preciso de um alerta para o usuario.
    // ou uma mensagem de erro.
    // Para isso, vamos criar uma condicional if.
    if (titulo == "" || preco == "" || descricao == "" || plataforma == "" || imgLink == "") {
        // Verificar se o if esta funcionando
        console.log("Os dados estao vazios");
        // Como esse é o primeiro if de verificacao, vamos criar 
        // uma funcao que envia/coloca na tela a mensagem de erro.
        // Usando a div que já temos com id msg.
        return true;
    } else {
        console.log("Os dados nao estao em branco");
        return false;
    }
}

function envieMsg(msg, tipo) {
    //Essa funcao vai colocar uma msg que vem parametro na tela 
    // do usuario. Logo a primeira coisa que eu tenho que fazer
    // é usar as tecnicas de HMTL com JS.

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgParaTela = `
        <p class='${tipo}'>${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;

    // O timeout ocorre depois que o tempo passado para ele
    // E executa o que esta dentro da function, no nosso caso
    // ele limpa a msgDiv para tirar da tela depois de 3000ms ou 3s.
    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}

// Agora temos os dados validados, se estao vazios ou nao.
// Temos os valores dos inputs passando para as variaveis
// Agora eu preciso criar a classe no singular
// Ou seja, se estou trabalhando com Jogos, agora eu crio a Jogo.

//Sintaxe da class
class Jogo {
    // Apos criar a class, eu preciso criar o meu construtor.
    // E nele, eu irei passar todas as propriedados, exceto: array e 
    // propriedades que serao calculadas por alguma funcao/metodo que eu 
    // desenvolva.
    constructor(titulo, preco, descricao, plataforma, imgLink) {
        // fazer as referencias das variaveis, utilizando o this.
        // e aqui que irá aparecer tbm os: arrays(se precisar)
        // e as propriedades que serao calculadas com alguma funcao/metodo.
        this.titulo = titulo;
        this.preco = preco;
        this.descricao = descricao;
        this.plataforma = plataforma;
        this.imgLink = imgLink;

        // Apos criar o construtor, vericar se ele esta funcionando.
    }
}

// Verificacao do Objeto Jogo, instacia ou criar.
// Criar um objeto com o tipo dele e uma variavel do nome que eu preferir.
// sempre const.

const jogoTeste = new Jogo("Teste", "12", "Desc", "steam", "link");
// Apos criar esse objeto, eu dou um console para verificar
// Se ele esta sendo montado.
console.log(jogoTeste)
// Se meu objeto estiver no console, meu construtor esta OK.

//Se OK, eu agora vou compor o meus jogo, como?
// Eu pego os valores dos inputs e instancio um objeto do tipo
// jogo, porém eu tenho que ser generico.

function comporJogo() {
    // Para compor meu JOGO eu preciso pegar os valores dos inputs.
    // Para isso, eu preciso criar uma variavel para cada input.

    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imgLink").value;

    // Agora eu preciso instanciar/montar um objeto do tipo Jogo.
    // Só que ao inves de digitar os valores manualmente, eu vou
    // pegar os valores das variaveis.
    const jogo = new Jogo(titulo, preco, descricao, plataforma, imgLink);

    //Agora vou testar se meu objeto esta pegando os valores do input e sendo
    //montado

    console.log(jogo);

    // Agora eu preciso armazenar esse jogo, em uma lista.
    // Entao eu preciso criar uma class de lista de jogos.

    //Apos criada, eu volto e uso o metodo add aqui.
    bibliotecaJogos.add(jogo);

    // Apos adicionar na lista, eu volto para instacia da class e dou 
    // um console.log nela, para ver se minha lista esta sendo criada.

    //Exibir usando minha funcao de render
    renderizarConteudo();
}

class ListaJogos {
    // Apos criar a class, eu preciso criar o meu construtor.
    // E nele, eu irei passar todas as propriedados, exceto: array e 
    // propriedades que serao calculadas por alguma funcao/metodo que eu 
    // desenvolva.
    constructor() {
        // Como será uma lista, eu preciso criar um this.listaQualquer
        // Com um array vazio.
        this.listaJogosArray = [];
    }

    // A lista sempre será uma class de acao, logo vou precisar
    // de metodos, qual seria o primeiro metodo de acao?
    // O primeiro e mais importante metodo é conseguir adicionar
    // algo nessa lista, no nosso caso add Jogo em Lista de Jogos.

    //Sintaxe dessa classe, o nome(){}

    // Quando eu vou adicionar algo, eu preciso saber o que, logo
    // eu uso parametro.
    add(parametro) {
        // Entao precisamos pegar o jogo que foi composto lá na linha 117.
        // E dar um push no array que foi criado na linha 136.
        // this.listaJogos.push(parametro);
        // parametro é quem?
        // o jogo, que foi instanciado na linha 117.

        // E apos criar esse metodo, agora eu volto para a funcao
        // comporJogo e uso após a instancia a acao/metodo add.
        // Mas antes eu preciso ter uma listaJogos instanciada de forma
        // global., criei ela na linha seguinte da class.

        //Aqui faremos as verificacoes, antes de adicionar jogo, dentro
        // do array, usando as funcoes que temos de acoes.
        if (verificarInputs()) {
            envieMsg("Preencha todos os campos", "erro");
        } else {
            this.listaJogosArray.push(parametro);
            limparInputs();
            envieMsg("Cadastrado com sucesso", "sucesso")
            console.log(this.listaJogosArray);
        }
    }
}

// Criar/Instanciar minha lista de jogos.
const bibliotecaJogos = new ListaJogos();
// Console que verifica se minha lista esta sendo criada.
console.log(bibliotecaJogos);
// Após cadastrar um jogo, eu posso direto no console, digitar o nome da lista
// para verificar se esta cadastrando.

// Criar uma funcao que nos auxilia, e limpa todos os campos para mim
// Uso ela sempre que precisar.
function limparInputs() {
    console.log("Usei a funcao de limparInputs");

    //Pego o valor dela, e defino como vazio.
    document.getElementById("input-titulo").value = '';
    document.getElementById("input-preco").value = '';
    document.getElementById("input-descricao").value = '';
    document.getElementById("input-plataforma").value = '';
    document.getElementById("input-imgLink").value = '';
}


// Tendo certeza que o meu array/lista de algo, esta sendo construida
// e armazenando todos os itens.
// Entao, eu crio uma funcao que fica responsavel por colocar/renderizar
// os itens de dentro do meu objeto na tela.

function renderizarConteudo() {
    // Variavel para armazenar o innerHMTL, que é
    // responsavel por renderizar na tela

    const listaHTML = document.getElementById('containerLista');
    listaHTML.innerHTML = '';

    // Faça meu laço de repeticao, que cria um elemento HTML para
    // cada elemento do meu objeto. Usando de preferencia o forEach.

    //Preciso pegar minha lista/array de objetos, no nosso caso: Jogos.
    let array = bibliotecaJogos.listaJogosArray;

    //Verificar se meu array esta vindo certo.
    console.log(array);

    //Aqui no for each, o meu elemento é jogo, ou seja o singular 
    // dos itens que eu tenho dentro do array. No nosso caso, array tem 
    // jogos, entao usamos jogo.
    array.forEach(jogo => {
        //crio uma div em html, dentro do JS mesmo.
        // Que vai ser colocada dentro da div, que esta esperando
        // no html.
        const jogoDiv = `
            <!--
                Comentario:
                Crio a div, com class para usar depois no CSS
                E passo os valores que estao no meu objeto 
                para cada propriedade/elemento do HTML
            -->
            <div class='jogoDetalhe'>
                <h2>Titulo: ${jogo.titulo}</h2>
                <p>Preço: R$${jogo.preco}</p>
                <p>Descrição: ${jogo.descricao}</p>
                <p>Plataforma: ${jogo.plataforma}</p>
                <img src="${jogo.imgLink}" alt="${jogo.titulo}">
            </div>
       `;

        listaHTML.innerHTML += jogoDiv;
    });
}
