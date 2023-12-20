/*
    Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).
*/

function converterTemp(fahrenheit, celsius){
    fahrenheit = Number(prompt('Informe a temperatura em fahrenheit '));
    celsius = (fahrenheit - 32) / 1.8;
    document.write(`A temperatura em Celsius é: ${celsius.toFixed(2)} ºC`);
}

converterTemp();