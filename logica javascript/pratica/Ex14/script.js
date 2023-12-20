// Escreva uma função que receba uma string e retorne a mesma string, mas com a primeira letra de cada palavra em maiúsculas.

function primeiraLetra(string){
    string = prompt('Informe uma palavra: ');
    console.log(string[0].toUpperCase());
}

document.write(primeiraLetra());