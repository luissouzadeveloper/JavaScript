// Map

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => {
    return valor * 2;
});
// console.log(numerosEmDobro);

const pessoas = [
    {nome: 'Luis', idade: 24},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomeDaPessoa = pessoas.map((obj) => {
    return obj.nome;
});
console.log(nomeDaPessoa);

const idades = pessoas.map((obj) => {
    return {idade: obj.idade}
});
console.log(idades);

const id = pessoas.map((obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice;
    return newObj;
});
console.log(id);

console.log(pessoas);