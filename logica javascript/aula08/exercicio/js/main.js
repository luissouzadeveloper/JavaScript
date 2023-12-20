// pegar data e hora do sistema

let txtData = document.querySelector('#dataHora');
txtData.innerHTML = dataFormatada();

function diaSem(dia) {
    let data = new Date();
    let diaSem = data.getDay(); // Retorna o dia da semana

    switch (diaSem) {
        case 0:
            dia = 'Domingo';
            break;

        case 1:
            dia = 'Segunda-feira';
            break;

        case 2:
            dia = 'Terça-feira';
            break;

        case 3:
            dia = 'Quarta-feira';
            break;

        case 4:
            dia = 'Quinta-feira';
            break;

        case 5:
            dia = 'Sexta-feira';
            break;

        case 6:
            dia = 'Sábado';
            break;

        default:
            dia = 'Inválido!';
    }

    return dia;
}

function mesAtual(mes) {
    let data = new Date();
    let mesAtual = data.getMonth(); // Retorna o mês

    switch (mesAtual) {
        case 0:
            mes = 'Janeiro';
            break;

        case 1:
            mes = 'Fevereiro';
            break;

        case 2:
            mes = 'Março';
            break;

        case 3:
            mes = 'Abril';
            break;

        case 4:
            mes = 'Maio';
            break;

        case 5:
            mes = 'Junho';
            break;

        case 6:
            mes = 'Julho';
            break;

        case 7:
            mes = 'Agosto';
            break;

        case 8:
            mes = 'Setembro';
            break;

        case 9:
            mes = 'Outubro';
            break;

        case 10:
            mes = 'Novembro';
            break;

        case 11:
            mes = 'Dezembro';
            break;

        default:
            mes = 'Inválido!';
    }

    return mes;
}

function dataFormatada() {

    let dataAtual = new Date();
    let dia = diaSem();
    let data = dataAtual.getDate();
    let mes = mesAtual();
    let ano = dataAtual.getFullYear();
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();

    return `${dia}, ${data} de ${mes} de ${ano}. São extamente ${horas} horas e ${minutos} minutos!`;
}