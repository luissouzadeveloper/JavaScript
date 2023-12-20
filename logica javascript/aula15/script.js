let nome = ['Luis', 'Maria', 'João'];

// for clássico
for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('##########');

// for in
for(let i in nome){
    console.log(nome[i]);
}

console.log('##########');

// for of
for (let string of nome){
    console.log(string);
}

console.log('##########');

nome.forEach(function (elemento, indice){
    console.log(elemento, indice);
});

let carro = {
    cor: 'Branco',
    modelo: 'S10',
    ano: 2023
};

for(let chave in carro){
    console.log(chave, carro[chave]);
}

/**
 * Qual usar?
 * 
 * for clássico = usar com iteráveis (arrays e strings).
 * for in = retorna o índice ou chave (strings, arrays e objetos).
 * for of = retorna o valor (iteráveis, arrays e strings). 
 */