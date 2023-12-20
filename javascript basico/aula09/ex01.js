let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let aux = varA;

// Solução
varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);