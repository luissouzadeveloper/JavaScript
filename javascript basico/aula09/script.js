/*alert('Olá Mundo!');

confirm('Deseja realmente apagar?');

prompt('Informe seu nome: ');*/

/*const confirma = confirm('Deseja realmente apagar?');
document.write('Saída: ' + confirma)*/

let confirma = confirm('Deseja realmente apagar?');
document.write('Saída: ' + confirma)

let n1 = Number(prompt('Informe um número: '));
let n2 = Number(prompt('Informe outro número: '));
let resultado = n1 + n2;
document.write('<br>');
document.write(`O resultado entre ${n1} e ${n2} foi de <strong>${resultado}</strong>`);