// DOM

function gerar(){
    let valor = Number(document.querySelector('#tab').value);
    let saida = document.querySelector('.resultado');

    for(let i = 1; i <= 10; i++){
        saida.innerHTML += `${valor} X ${i} = ${valor * i}<br>`
    }
}

function entrar(){
    let botao = document.querySelector('#btnTab');
    botao.style.transform = 'scale(2)'
}

function sair(){
    let botao = document.querySelector('#btnTab');
    botao.style.transform = 'scale(1)'
}