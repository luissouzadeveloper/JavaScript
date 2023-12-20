// Atribuição via desustruturação (Arrays)

/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Atibuição via desestruturação
let [um, , tres, , cinco, , sete, , nove] = numeros;

console.log(um, tres, cinco, sete, nove);*/

let numeros = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];
let [lista1, lista2, lista3] = numeros
console.log(lista3[2])
