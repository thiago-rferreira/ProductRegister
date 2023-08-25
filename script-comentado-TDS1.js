console.log("JS está OK.")

// Vamos verificar se os inputs estao trazendo os valores
// Para isso precisamos de variaveis que coletam e armazem
// os inputs



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
    console.log(titulo);
    console.log(preco);
    console.log(descricao);
    console.log(plataforma);
    console.log(imgLink);

    // Vamos entao criar uma verificacao se os inputs estao vazios.
    // Pois se estao vazio eu preciso de um alerta para o usuario.
    // ou uma mensagem de erro.
    // Para isso, vamos criar uma condicional if.
    if (titulo == "" || preco == "" || descricao == "" || plataforma == "" || imgLink == "") {
        //Verificar se o if esta funcionando
        console.log("Os inputs estao vazios.");
        // E se ele estiver funcionando, ou a condicao no caso é true;

        // Nos deparamos com uma necessidade
        // Que é alertar/mostrar na tela para o usuario
        // o erro.

        // Vamos criar uma funcao que envie/coloque
        // Na tela uma mensagem de erro ou sucesso.
        envieMsg('Preencha todos os campos', 'erro');

        return true;
    } else {
        console.log("Os inputs estao preenchidos.");
        envieMsg('Cadastrado com sucesso', 'sucesso');
        return false;
    }
}

// Vamos criar uma funcao de envio
// De mensagem de erro ou sucesso.
// Que altere o HTML da div de mensagem.

function envieMsg(msg, tipoMsg) {
    //Essa funcao vai colocar uma msg que vem parametro na tela 
    // do usuario. Logo a primeira coisa que eu tenho que fazer
    // é usar as tecnicas de HMTL com JS.

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
        <p class='${tipoMsg}'>${msg}</p>
    `

    msgDiv.innerHTML = msgParaTela;


    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000)
}

// Agora temos os dados validados, se estao vazios ou nao.
// Temos os valores dos inputs passando para as variaveis
// Agora eu preciso criar a classe no singular
// Ou seja, se estou trabalhando com Jogos, agora eu crio a Jogo.

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
    }

    // Apos criarmos o construtor, vamos verificar se ele esta OK.
}

//Verificacao se o construtor esta ok.
// Verificacao do Objeto Jogo, instacia ou criar.
// Criar um objeto com o tipo dele e uma variavel do nome que eu preferir.
// sempre const.
const jogoTeste = new Jogo("Teste", "123", "DescTeste", "Steam", "url");
// Apos criar esse objeto, eu dou um console para verificar
// Se ele esta sendo montado.
console.log(jogoTeste);
// Se meu objeto estiver no console, meu construtor esta OK ou seja ele.
// Foi construido.

//Se OK, eu agora vou compor o meus jogo, como?
// Eu pego os valores dos inputs e instancio um objeto do tipo
// jogo, porém eu tenho que ser generico.

function comporJogo(){
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

    const jogo = new Jogo(titulo, preco, descricao,plataforma,imgLink);

    //Agora vou testar se meu objeto esta pegando os valores do input e sendo
    //montado
    console.log(jogo);

    // Agora eu preciso armazenar esse jogo, em uma lista.
    // Entao eu preciso criar uma class de lista de jogos.
    // Preciso entao adicionar jogo(da linha 132) dentro da lista (da linha 153)
    // Entao vou criar um metodo que adicione a lista(da linha 153).
    

    //Agora com o metodo adicionar, dentro de bibliotecaJogos, eu adiciono.

    bibliotecaJogos.adicionar(jogo);
    console.log(bibliotecaJogos);


    // Apos eu compor, eu chamo a funcao que renderiza
    // o item na tela.

    renderizarConteudo();
}


class ListaJogos{
    // Apos criar a class, eu preciso criar o meu construtor.
    // E nele, eu irei passar todas as propriedados, exceto: array e 
    // propriedades que serao calculadas por alguma funcao/metodo que eu 
    // desenvolva.
    constructor(){
        // Como será uma lista, eu preciso criar um this.listaQualquer
        // Com um array vazio.
        this.listaJogosArray = [];
    }

    //Apos criar, vamos testar o construtor.
    // Apos testado, vamos criar o metodo que adiciona a instacia (linha 132)
    // no array.

     // A lista sempre será uma class de acao, logo vou precisar
    // de metodos, qual seria o primeiro metodo de acao?
    // O primeiro e mais importante metodo é conseguir adicionar
    // algo nessa lista, no nosso caso add Jogo em Lista de Jogos.

    //Sintaxe dessa classe, o nome(){}

    // Quando eu vou adicionar algo, eu preciso saber o que, logo
    // eu uso parametro.

    adicionar(parametro){
        // Entao precisamos pegar o jogo que foi composto lá na linha 132.
        // E dar um push no array que foi criado na linha 154.
        // this.listaJogos.push(parametro);
        // parametro é quem?
        // o jogo, que foi instanciado na linha 132.

        // E apos criar esse metodo, agora eu volto para a funcao
        // comporJogo e uso após a instancia a acao/metodo add.
        // Mas antes eu preciso ter uma listaJogos instanciada de forma
        // global., criei ela na linha seguinte da class - 194.

        //push
       // this.listaJogosArray.push(parametro);
        //Voltamos para comporJogo, para testar.
        // Depois de testar e estar OK. Vamos colocar as verificacoes
        // Antes de dar o push no array.

        if(verificarInputs() == false){
            this.listaJogosArray.push(parametro);
            limparInputs();
        }
    }
}

//Teste do construtor da lista.
//const listaTeste = new ListaJogos();
//console.log(listaTeste);

//Crio a lista que eu vou utilizar para armazenar os meus jogos.
// Criar/Instanciar minha lista de jogos.
const bibliotecaJogos = new ListaJogos();
console.log(bibliotecaJogos);


// Lá em adicionar, surgiu a necessidade de apos criar o objeto
// que eu limpe os inputs, entao eu criei uma funcao de acao.
function limparInputs(){
    document.getElementById("input-titulo").value = "";
    document.getElementById("input-preco").value = "";
    document.getElementById("input-descricao").value = "";
    document.getElementById("input-plataforma").value = "";
    document.getElementById("input-imgLink").value = "";
}

//Oculto todos os consoles quando eu for mostrar para o meu professor querido.

console.clear();

// Tendo certeza que o meu array/lista de algo, esta sendo construida
// e armazenando todos os itens.
// Entao, eu crio uma funcao que fica responsavel por colocar/renderizar
// os itens de dentro do meu objeto na tela.

function renderizarConteudo(){
    // Variavel para armazenar o innerHMTL, que é
    // responsavel por renderizar na tela

    const listaHTML = document.getElementById("conteiner-lista");
    listaHTML.innerHTML = "";

    // Agora eu preciso percorrer a minha lista de jogos
    // Faça meu laço de repeticao, que cria um elemento HTML para
    // cada elemento do meu objeto. Usando de preferencia o forEach.

    //Pegar minha lista que esta no meu objeto e colocar em uma variavel
    //chamada array.

    let array = bibliotecaJogos.listaJogosArray;

    // Agora eu preciso percorrer a minha lista de jogos, vulgo array.

    //Aqui no for each, o meu elemento é jogo, ou seja o singular 
    // dos itens que eu tenho dentro do array. No nosso caso, array tem 
    // jogos, entao usamos jogo.
    array.forEach(jogo => {
        //crio uma div em html, dentro do JS mesmo.
        // Que vai ser colocada dentro da div, que esta esperando
        // lá no html.

        const jogoDiv = `
        <!--
            Comentario:
            Crio a div, com class para usar depois no CSS
            E passo os valores que estao no meu objeto 
            para cada propriedade/elemento do HTML
        -->
        <div class='jogoDetalhe'>
            <p>Titulo: ${jogo.titulo}</p>
            <p>Preço: R$${jogo.preco}</p>
            <p>Descrição: ${jogo.descricao}</p>
            <p>Plataforma: ${jogo.plataforma}</p>
            <img src="${jogo.imgLink}" alt="${jogo.titulo}"/>
        </div>
        `;

        listaHTML.innerHTML += jogoDiv;
    });
}

//Testar para ver se tudo esta ok, e depois fazer o css conforme o descrito