let paragrafos = document.querySelector('.paragrafos');
let ps = paragrafos.querySelectorAll('p');

// Pegando cor do body
let estilosBody = getComputedStyle(document.body);
let backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff'
}