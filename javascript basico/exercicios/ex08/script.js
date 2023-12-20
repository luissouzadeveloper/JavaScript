function converter(){
    let conv = document.querySelector('#cx-temp').value;
    let fahrenheit = Number(conv)
    let saida = document.querySelector('#saida')
    let celsius = (fahrenheit - 32) * 9/5;
    saida.innerHTML = `A temperatura em Celsius é ${celsius.toFixed(2)} °C`

    //document.write(typeof(fahrenheit))
}