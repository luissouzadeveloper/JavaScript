// FUNÇÕES

//Arrow function
const quadrado = n1 => Math.pow(n1, 2);

console.log('Quadrado do número: ' + quadrado(2));

// Função anônima
const raiz = function(num){
    return Math.sqrt(num);
};
console.log(raiz(9));
console.log(raiz(144));

// Declaração de forma clássica
/*function soma(n1 = 0, n2 = 0){
    let resultado = n1 + n2;
    return resultado;
}

const resultado = soma(6);
console.log(resultado)*/

/*function saudacao(nome){
    return `Bom dia ${nome}`;
}
const variavel = saudacao('Luis');
console.log(variavel)*/