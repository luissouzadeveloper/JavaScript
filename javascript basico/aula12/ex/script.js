const numero = Number(prompt('Informe um número'));

const numTitulo = document.querySelector('#numero-titulo');

const caixaTexto = document.querySelector('#texto');

numTitulo.innerHTML = numero;
caixaTexto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
caixaTexto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
caixaTexto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
caixaTexto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
caixaTexto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
caixaTexto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`