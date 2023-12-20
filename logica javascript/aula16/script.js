// While

let nome = 'Raimundo';
let contador = 0;

while (contador < nome.length) {
    console.log(nome[contador]);
    contador++;
}

// function random(min, max){
//     let numAleatorio = Math.random() * (max - min) + min;
//     return Math.floor(numAleatorio);
// }

// let min, max;
// min = 1;
// max = 50;
// let rand = random(min, max)

// while(rand !== 10){
//     rand = random(min, max);
//     console.log(rand);
// }

// Do while
let indice = 0

do {
    console.log(indice);
    indice++;
} while (indice <= 10);