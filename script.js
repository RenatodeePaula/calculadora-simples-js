// seleção de elementos
const displayInput = document.querySelector("#display-input");
const botaoIgual = document.querySelector('.igual');
const botaoPonto = document.querySelector('.ponto');
const botoesNum = document.querySelectorAll(".num");
const botoesOperacoes = document.querySelectorAll(".operador");

// variáveis globais
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// funções
function atualizaDisplay() {
    displayInput.value = operacaoAtual;
};

function insereNumeros(evento) {    
    if(calculando) {
        operacaoAtual = evento.target.textContent;
        calculando = false;
    } else {
        operacaoAtual += evento.target.textContent;
    };
    atualizaDisplay();
};

function inserirPontos() {
    if(operacaoAtual.indexOf('.') === -1) {
        operacaoAtual += ".";
        atualizaDisplay();
    };
};

// eventos
botaoPonto.addEventListener("click", inserirPontos);
botoesNum.forEach((botao) => botao.addEventListener('click', insereNumeros) );




