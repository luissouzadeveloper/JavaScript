function criar(){
    // Cria elemento
    let paragrafo = document.createElement('p');
    let div = document.querySelector('#elementos');
    paragrafo.textContent = 'Olá';
    div.appendChild(paragrafo);

    let link = document.createElement('a');
    link.textContent = 'Um link'
    div.appendChild(link)
}