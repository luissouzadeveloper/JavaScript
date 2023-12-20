// Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.

function areaPerimetroCirculo(area, pi = 3.14, raio, c){
    // área
    // raio = Number(prompt('Informe o raio do círculo: '))
    // area = pi * Math.pow(raio, 2);

    // document.write(`A área do círculo é: ${area} cm² <br>`);

    // perímetro
    c = Number(prompt('Informe o perímetro do círculo: '))
    c = 2 * pi * raio;
    document.write(`O perímetro do círculo é: ${c}`);
}

areaPerimetroCirculo()