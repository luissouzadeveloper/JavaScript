// try{
//     // É executado quando não há erros
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try{
//         console.log(b);
//     } catch(e){
//         console.log('Deu erro');
//     }
// } catch(e) {
//     // É executado quando há erros
//     console.log('Tratando o erro');
// } finally {
//     // É sempre executado
//     console.log('FINALLY: Eu sempre executo');
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando uma instância de Date.')
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
    let data = new Date('01-01-1970 12:58:12')
    let hora = retornaHora()
    console.log(hora);
} catch(e){
    // Tratar erro
} finally{
    console.log('OK')
}

