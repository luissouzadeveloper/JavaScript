let inputTarefa = document.querySelector('.input-tarefa');
let btnTarefa = document.querySelector('.btn-tarefa');
let tarefas = document.querySelector('.tarefas');

// Cria LI HTML
function criaLi(){
    let li = document.createElement('li');
    li.style.listStyle = 'none'
    return li;
}

// Cria a tarefa.
function criaTarefa(textoInput){
    let li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaTarefa();
    criaBotaoApagar(li);
    salvarTarefas();
}

// Limpa input.
function limpaTarefa(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Botão de apagar tarefas
function criaBotaoApagar(li){
    li.innerHTML += ' ';
    let botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'Apagar');
    li.appendChild(botaoApagar);
}

// Salvar tarefas
function salvarTarefas(){
    let liTarefas = tarefas.querySelectorAll('li');
    let listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerHTML;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    let tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

// Retomar tarefas salvas
function adicionaTarefasSalvas(){
    let tarefas = localStorage.getItem('tarefas');
    let listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

// Evento de teclas
inputTarefa.addEventListener('keypress', function(evento){
    if(evento.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

// Evento de click
btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

});

// Evento para remover o li
document.addEventListener('click', function(e){
    let el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

adicionaTarefasSalvas()