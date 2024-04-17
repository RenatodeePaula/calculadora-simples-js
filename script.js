// seleção de elementos
const displayInput = document.querySelector("#display-input");
const botaoIgual = document.querySelector('.igual');
const botaoPonto = document.querySelector('.ponto');
const botoesNum = document.querySelectorAll(".num");
const botoesOperacoes = document.querySelectorAll(".operador");

// variáveis globais
let valorAnterior = "";
let operacaoAtual = "";
let operador = null;
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

function insereOperador(evento) {
    if( operacaoAtual !== '') {
        if(!calculando) {
            if(operador !== null){
                calcula();
            }
            valorAnterior = operacaoAtual;
            operacaoAtual = "";
        };
        operador = evento.target.textContent;
    };
};

function calcula() {
    let resultado = null;
    const operadorAnterior = +(valorAnterior);
    const operadorAtual = +(operacaoAtual);

    switch(operador) {
        case '+':
            resultado = operadorAnterior + operadorAtual;
        break
        case '-':
            resultado = operadorAnterior - operadorAtual ;
        break
        case '*':
            resultado = operadorAnterior * operadorAtual;
        break
        case '/':
            resultado = operadorAnterior / operadorAtual;
        break;     
    };

    operacaoAtual = String(resultado);
    valorAnterior = operadorAtual;
    calculando = true;
    atualizaDisplay();
};

// eventos
botoesNum.forEach((botao) => botao.addEventListener('click', insereNumeros) );
botaoPonto.addEventListener('click', inserirPontos);
botoesOperacoes.forEach((botao) => botao.addEventListener('click', insereOperador))
botaoIgual.addEventListener("click", calcula)


