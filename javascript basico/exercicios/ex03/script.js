function parImpar(){
    let num = document.querySelector('#num-input').value;
    let res = document.querySelector('#resultado')
    if (num % 2 == 0) {
        res.innerHTML = `O número ${num} é <strong>par!</strong>`;
    } else {
        res.innerHTML = `O número ${num} é <strong>ímpar</strong>`;
    }
}