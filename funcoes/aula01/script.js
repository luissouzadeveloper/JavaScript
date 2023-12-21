// Declaração de uma função
falaOi();

function falaOi(){
    console.log('Oi');
}

// Funções são objetos de primeira classe
const souUmDado = function(){
    console.log('Sou um dado!');
};
souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar a função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Arrow functions
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de objetos
const objeto = {
    fala(){
        console.log('Função do objeto!');
    }
};
objeto.fala()