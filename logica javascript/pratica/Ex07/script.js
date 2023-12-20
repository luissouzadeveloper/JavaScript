/*
    Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.
*/

let numero1 = Number(prompt('Informe o 1º número: '));
let numero2 = Number(prompt('Informe o 2º número: '));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

document.write(`Soma: ${soma} <br>`);
document.write(`Subtração: ${subtracao} <br>`);
document.write(`Multiplicação: ${multiplicacao} <br>`);
document.write(`Divisão: ${divisao} <br>`);