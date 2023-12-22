// Parâmetros da função

// function funcao(a, b, c) {
//     // console.log(arguments[10]); -> O arguments segura todos os valores na execução da função! Ocorre só em function

//     let total = 0;
//     for (let argumento of arguments) {
//         total = total + argumento;
//     }

//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);

// function soma(a = 0, b = 1, c = 1){ // <- Preenchimento com valores padrões nos parâmetro.
//     console.log(a + b + c);
// }
// soma(3, 5, 4);

// function nome({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// }
// nome({nome: 'Raimundo', sobrenome: 'Silva', idade: 70});

// function valor([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3);
// }
// valor([20, 30, 40]);

const conta = function(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador)
};
conta('+', 1, 20, 30, 40, 50);