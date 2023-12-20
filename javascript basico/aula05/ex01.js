const nome = 'Luis Felipe';
let idade = 23;
let peso = 53.90;
let altura = 1.70;
let IMC = peso / (altura * altura);
let nascimento = 2023 - idade - 1;

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${IMC.toFixed(1)} e nasceu em ${nascimento}`)
