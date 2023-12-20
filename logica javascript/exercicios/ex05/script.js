let btnSoma = document.querySelector('#soma');

btnSoma.addEventListener('click', function(valor1, valor2, soma){
    valor1 = Number(prompt('Informe o primeiro valor: '));
    valor2 = Number(prompt('Informe o segundo valor: '));

    soma = valor1 + valor2;

    let saida = document.querySelector('#resultado');
    saida.innerHTML = `A soma entre <strong>${valor1}</strong> e <strong>${valor2}</strong> é <strong>${soma}</strong>`
});