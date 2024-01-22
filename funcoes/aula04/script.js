// Closures
function retornaFuncao(nome){
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('João');
const funcao2 = retornaFuncao('Maria');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());