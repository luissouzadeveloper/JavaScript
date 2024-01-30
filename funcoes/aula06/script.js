(function(idade, peso, altura){
    console.log('Qualquer coisa');
    let nome;

    let sobrenome = 'Arruda';
    function falaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNomeCompleto(){
        console.log(falaNome('José'))
    }

    falaNomeCompleto();

    console.log(idade, peso, altura);
})(29, 56, 1.73);

