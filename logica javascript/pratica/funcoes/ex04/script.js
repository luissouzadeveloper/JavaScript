// Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

function areaTriangulo(base, altura, area){
    base = Number(prompt('Informe a base do triângulo '));
    altura = Number(prompt('Informe a altura do triângulo '));
    area = (base * altura) / 2;

    document.write(`A área do triângulo é: ${area}cm²`);
}

areaTriangulo();