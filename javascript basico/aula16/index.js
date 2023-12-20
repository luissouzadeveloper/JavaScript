/*
    Primitvos(imutáveis) = string, number, boolean, undefined, null (bigint, symbol)
*/
/*let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);*/

// Valores mutáveis

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4); // <- Tanto a variável a e b serão modificadas.
console.log(a, b);

b.pop();
console.log(a, b);