// For in

let frutas = ['Pêra', 'Maçã', 'Uva', 'Banana'];

// Forma clássica
// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }

// Laço for in -> Lê os índices ou chaves.
for(let i in frutas){
    console.log(frutas[i]);
}

// for in em objetos
let pessoa = {
    nome: 'Luis',
    idade: 24,
    altura: 1.70
};
for(let obj in pessoa){
    console.log(`${obj}: ${pessoa[obj]}`);
}