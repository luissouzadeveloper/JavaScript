// Reduce -> Reduzir o array em único elemento.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice, array) => {
    if (valor % 2 === 1) acumulador += valor;
    return acumulador;
}, 0);

console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luis', idade: 24},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(pessoaMaisVelha);