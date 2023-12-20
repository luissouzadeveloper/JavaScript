let btnMedia = document.querySelector('#media');

btnMedia.addEventListener('click', function(nome, nota1, nota2, media) {
    nome = prompt('Qual é o seu nome? ');
    nota1 = Number(prompt(`Informe a primeira nota de ${nome}`));
    nota2 = Number(prompt('Informe a segunda nota '));
    media = (nota1 + nota2) / 2;

    let saida = document.querySelector('#resultado');
    saida.innerHTML = `<p>O nome do aluno é: ${nome}</p>
        <p>As notas informadas foram ${nota1} e ${nota2}</p>
        <p>A média de ${nome} é ${media.toFixed(2)}</p>
    `
})