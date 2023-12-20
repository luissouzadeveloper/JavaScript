function meuEscopo(){
    let formulario = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');

    let pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        let nome = document.querySelector('.nome');
        let sobrenome = document.querySelector('.sobrenome');
        let peso = document.querySelector('.peso');
        let altura = document.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} <br> ${sobrenome.value} <br> ${peso.value} <br> ${altura.value}</p>`
    }

    formulario.addEventListener('submit', recebeEventoForm);
}

meuEscopo();