//Objeto Date()

/*const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
console.log(data.toString());*/

//let data = new Date(2023, 5); // ano, mês, dia, hora, minutos, segundos, milisegundos.
/*let data = new Date(1686694862833);
let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
console.log(`Data: ${dia}. Mês: ${mes}. Ano: ${ano}. Hora: ${hora}. Minutos: ${minutos}. Segundos: ${segundos}`);
console.log(data.toString())
//console.log(Date.now())*/

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`; 
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}. ${hora}:${min}:${seg};`
}
const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil);