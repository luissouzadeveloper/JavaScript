let botao = document.querySelector('#btn');
botao.addEventListener('click', function(){
    // Nome
    let nome = prompt('Qual é o seu nome? ');
    alert(`Prazer ${nome}! É um prazer te conhecer.`)
})