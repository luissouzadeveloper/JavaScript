let botaoAcao = document.querySelector('#calcular');
let saida = document.querySelector('.resultado');

botaoAcao.addEventListener('click', function(){
    let peso = Number(document.querySelector('#valor1').value);
    let altura = Number(document.querySelector('#valor2').value);

    let imc = peso / (altura * altura);

    let paragrafo = document.createElement('p');
    let conteudo = document.createTextNode(`Seu IMC é de ${imc.toFixed(1)}`)
    paragrafo.appendChild(conteudo);
    
});