// Manipulação de strings
let umaString = 'Texto';
console.log(umaString.charAt(2)); // <- charAt() = retorna um caractere tendo como parâmetro um índice que comceça em 0
console.log(umaString.concat(' ', 'concatenado!')); // <- concat() Tem a mesma função da concatenação (+)
console.log(`${umaString} concatenado com template string!`); // <- ${} As templates strings são mais eficientes

// Busca de string
let texto = 'Um texto qualquer';
console.log(texto.indexOf('a', 5)); // <- indexOf() serve para buscar letras da esquerda para a direita pelos índices.
console.log(texto.lastIndexOf('a')) // <- lastIndexOf tem a mesma função do indexOf(), porém, faz uma busca de trás pra frente.
console.log(texto.replace('Um', 'Algum')); // <- replace() Serve para torcar uma palavra por outra.
console.log(texto.length); // <- length pega o tamanho de uma string.
console.log(texto.slice(3,8)); // <- slice() serve para fatiar ou pegar uma determinada palavra da string
