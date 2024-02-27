// Object.defineProperty() e Object.defineProperties()
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar ou não
        configurable: true // configurável ou não
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        },
    })
};

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 40;
console.log(p1);

for(let chave in p1){
    console.log(chave);
}