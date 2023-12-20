// Laço for

// i -> index!
// For = 1 -> Inicializa
// 2 -> Faz a condição
// 3 -> Faz o incremento ou decremento
/*for (let i = 0; i <= 20; i++){
    //console.log(`Linha: ${i}`)
    i % 2 === 0 ? console.log(`${i} É PAR!`) : console.log(`${i} É ÍMPAR!`);
    /*if (i % 2 == 0) {
        console.log(`${i} É PAR!`)
    } else {
        console.log(`${i} É ÍMPAR!`)
    }*/

// Percorrer um array

const frutas = ['Maçã', 'Banana', 'Morango', 'Pêra', 'Cajú',  'Manga'];
for (let i = 0; i < frutas.length; i++){
    console.log(`Índice: ${i}. Fruta: ${frutas[i]}`);
}
