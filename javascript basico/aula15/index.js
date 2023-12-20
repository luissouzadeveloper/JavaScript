// Objetos
/*const pessoa1 = { // <- objetos vem acompanhado por chaves.
    nome: 'Luis',
    sobrenome: 'Souza',
    idade: 23
};
// Acessando atributos
console.log(pessoa1.nome);*/

// Função para a criação de pessoa
function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
}
const pessoa1 = criaPessoa('Luis', 'Souza', 23);
const pessoa2 = criaPessoa('Ana', 'Silva', 20);
const pessoa3 = criaPessoa('Pedro', 'Jesus', 30);
console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);

const individuo1 = {
    nome: 'João',
    sobrenome: 'Jeová',
    idade: 60,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        ++this.idade;
    }
};
individuo1.fala();
individuo1.incrementaIdade();
individuo1.fala()
