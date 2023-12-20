// Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

let idade = Number(prompt('Informe a sua idade: '));

if (idade >= 18) {
    document.write(`Você tem ${idade} anos. Maior de idade!`);
} else if (idade >= 13 && idade <= 17) {
    document.write(`Você tem ${idade} anos. Adolescente!`);
} else {
    document.write(`Você tem ${idade} anos. Criança!`);
}