// Atribuição via desestruturação (Objetos)

let pessoa = {
    nome: 'Luis',
    sobrenome: 'Souza',
    idade: 30,
    enderco: {
        rua: 'Rua doze',
        numero: 100
    }
};

// Atribuição via desestruturação
let {enderco: {rua, numero}, enderco} = pessoa
console.log(rua, numero, enderco);