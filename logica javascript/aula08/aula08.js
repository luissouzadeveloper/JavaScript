// Estrutura switch

function getDayWeek(week){

    let diasSemTexto;

    switch(week){
        case 0:
            diasSemTexto = 'Domingo';
            break;
        
        case 1:
            diasSemTexto = 'Segunda-feira';
            break;
    
        case 2:
            diasSemTexto = 'Terça-feira';
            break;
        
        case 3:
            diasSemTexto = 'Quarta-feira';
            break;
    
        case 4:
            diasSemTexto = 'Quinta-feira';
            break;
    
        case 5:
            diasSemTexto = 'Sexta-feira';
            break;
        
        case 6:
            diasSemTexto = 'Sábado';
            break;
    
        default:
            diasSemTexto = 'Erro!';
            break;
    } 
    return diasSemTexto
}

const data = new Date();
const diaSem = data.getDay();  

const semanaDia = getDayWeek(diaSem)

console.log(semanaDia);