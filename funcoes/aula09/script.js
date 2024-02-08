// Funções construtoras
function Pessoa(nome, sobrenome){
    // Privado -> Atributos e métodos
    const id = 12345;
    const metodoInterno = function (){

    };

    // Públicos -> Atributos e métodos
    this.nome = nome,
    this.sobrenome = sobrenome;

    this.metodo = () =>{
        console.log(this.nome + ' Sou um método!')
    }
}

const pessoa1 = new Pessoa('Alan', 'Silva');
const pessoa2 = new Pessoa('Maria', 'Souza');
pessoa1.metodo();