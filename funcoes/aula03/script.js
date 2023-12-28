// Escopo léxico
const nome = 'Luis';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Lucas';
    falaNome();
}

usaFalaNome();