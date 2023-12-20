let elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

function criaElementos(){
    let container = document.querySelector('.container');
    let div = document.createElement('div')

    for(let i = 0; i < elementos.length; i++){
        let {tag, texto} = elementos[i];

        let tagCriada = document.createElement(tag);
        let textoCriado = document.createTextNode(texto);
        tagCriada.appendChild(textoCriado)

        div.appendChild(tagCriada)
    }
    
    container.appendChild(div);
}

criaElementos();

