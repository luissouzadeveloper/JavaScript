// Break e Continue

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if (numero === 2) {
        continue; // -> pula o valor e continua.
    }

    if (numero === 7) {
        break; // -> para o laço ou código, mesmo se tiver algo a ser executado.
    }
    console.log(numero);
}