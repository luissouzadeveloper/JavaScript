// Numbers
let num1 = 0.7;
let num2 = 0.1;

//num1 += num2; // é o mesmo que num1 = num1 + num2
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;

console.log(num1);
//console.log(num1.toString() + num2.toString());  toString() converte um number para string
//console.log(num1.toString(2)); toString(); também é capaz de transformar um valor em binário
//console.log(num2.toFixed(2)); toFixed() serve para determinar o nº de casas decimais
//console.log(Number.isInteger(num1)); Number.isInteger(variavel) pode retornar true ou false se o nº for inteiro
//let temp = num1 * 'Oi';
//console.log(Number.isNaN(temp)); Number.isNaN indica se não é um nº retornando true ou false 

