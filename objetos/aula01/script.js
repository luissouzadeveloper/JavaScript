// Revisão de objetos

// Literal
// const pessoa = {
//     nome: 'Luis',
//     sobrenome: 'Souza'
// };

// const chave = 'nome'
// console.log(pessoa[chave]); // <- Notação de colchete
// console.log(pessoa.sobrenome); // <- Notação de ponto

// Construtor Objeto
// const pessoa1 = new Object();
// pessoa1.nome = 'João';
// pessoa1.sobrenome = 'Silva';
// pessoa1.idade = 30;
// // delete pessoa1.nome;
// // console.log(pessoa1);
// pessoa1.falaNome = function() {
//     return (`${this.nome} está falando seu nome!.`)
// };
// pessoa1.getDataNasc = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };
// console.log(pessoa1.getDataNasc());

// for(let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }

// Funções fábricas / Funções construtoras
// function criaPessoa(nome, sobrenome){
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }
// const p1 = criaPessoa('Luis', 'Oliveira');
// console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this) // <- Trava todas as instâncias criadas
}
const p1 = new Pessoa('Maria', 'de Jesus');
Object.freeze(p1); // <- Trava objeto
p1.nome = 'João';
const p2 = new Pessoa('Zé', 'Miranda');
console.log(p1);
console.log(p2);