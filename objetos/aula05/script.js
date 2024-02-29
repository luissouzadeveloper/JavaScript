// Prototypes

// Molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => {
    //    return 'Original ' + this.nome + ' ' + this.sobrenome;
    // }
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// Instância
const pessoa1 = new Pessoa('Luis', 'Souza');
const pessoa2 = new Pessoa('Maria', 'Almeida');
const data = new Date();

console.dir(pessoa1);
console.dir(data);
