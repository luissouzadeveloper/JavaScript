// try, catch e throw

try{
    console.log(variavel);
} catch(erro){
    console.log('variavel não existe');
}

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números!');
    }

    return x + y;
}

try{
    console.log(soma(5, 2));
    console.log(soma(5, '2'));
} catch(error){
    console.log('Erro no tipo de dado!');
}