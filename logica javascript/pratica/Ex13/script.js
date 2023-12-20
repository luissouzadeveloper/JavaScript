// Crie uma página HTML com um botão que, quando clicado, exiba um alerta que diga “Você clicou no botão!”.

let botao = document.querySelector('#btn');

botao.addEventListener('click', function(){
    alert('Você clicou no botão!');
});