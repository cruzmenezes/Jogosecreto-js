//  o codigo começa aqui

// let titulo = document.querySelector('h1');

// titulo.innerHTML = 'jogo do numero secreto 2';

// let paragrafo = document.querySelector('p');

// paragrafo.innerHTML = 'Escolha um numero entre 0 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumerosAleatorios();
let tentativas = 1;

function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 0 e 4');
}

exibirMensagemInicial();
// gerarNumerosAleatorios()

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brasilian Portuguese Female', {rate:1.2});
}



// exibirTextoNaTela('h1', 'Jogo do numero secreto');
// exibirTextoNaTela('p', 'Escolha um numero entre 0 e 10');



function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertouuuu');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`você descobriu o numero com ${tentativas} ${palavraTentativas} `);
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero é menor');
        }else {
            exibirTextoNaTela('p', 'o numero e maior');
        }        
        
    }
    tentativas ++;
    limparCampo();
    // console.log(chute == numeroSecreto);
}

function gerarNumerosAleatorios() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        gerarNumerosAleatorios();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo() {
    numeroSecreto = gerarNumerosAleatorios();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
