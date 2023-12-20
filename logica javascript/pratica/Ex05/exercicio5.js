function divisivel(valor){
    if(typeof valor !== 'number'){
        console.log(valor)
    }
    else if (valor % 3 === 0 && valor % 5 === 0) {
        console.log('FizzBuzz');
    } else if (valor % 3 === 0) {
        console.log('Fizz');
    } else if(valor % 5 === 0){
        console.log('Buzz'); 
    } else {
        console.log(valor);
    }
}

for(let i = 0; i <= 100; i++){
    console.log(i, divisivel(i));
}

