// Filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10!
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => {
    return valor > 10;
});
// console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Luis', idade: 24},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const comNomeGrande = pessoas.filter(obj => {
    return obj.nome.length >= 7
});

console.log(comNomeGrande);

const idadeComMais50 = pessoas.filter(obj => {
    return obj.idade > 50
});

console.log(idadeComMais50);

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
})

console.log(nomeTerminaComA)