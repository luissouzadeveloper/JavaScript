let btnCalc = document.querySelector('.btn-enviar');

btnCalc.addEventListener('click', function(event){
    event.preventDefault();

    let peso = document.querySelector('#input-1').value;
    let altura = document.querySelector('#input-2').value;
    let saida = document.querySelector('.saida');
    let imc = peso / (altura * altura);

    // Array de intervalos do imc
    let intervalo = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2', 'Obesidade grau 3']


    if (peso === '' || altura === '') {
        alert('Impossível calcular com os campos vazios!');
    } else if(imc < 18.5){
        saida.style.background = 'red';
        saida.style.color = 'white';
        saida.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (${intervalo[0]})`;
    } else if (imc < 24.9) {
        saida.style.background = 'green';
        saida.style.color = 'white';
        saida.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (${intervalo[1]})`;
    } else if (imc < 29.9) {
        saida.style.background = 'red';
        saida.style.color = 'white';
        saida.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (${intervalo[2]})`;
    } else if (imc < 34.9) {
        saida.style.background = 'red';
        saida.style.color = 'white';
        saida.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (${intervalo[3]})`;
    } else if (imc < 39.9) {
        saida.style.background = 'red';
        saida.style.color = 'white';
        saida.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (${intervalo[4]})`;
    } else if (imc > 40) {
        saida.style.background = 'red';
        saida.style.color = 'white';
        saida.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (${intervalo[5]})`;
    }
});