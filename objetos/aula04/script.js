// Métodos para objetos
const produto = {
    nome: 'Produto',
    preco: 1.8
};

// const outraCoisa = {
//     ...produto,
//     material: 'porcelana' 
// };

const caneca = Object.assign({}, produto);
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));
console.log(produto);