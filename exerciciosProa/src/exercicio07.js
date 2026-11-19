// Área do retângulo

const area = (altura, base) => {
    let areaRetangulo = altura * base;
    return `A área do retangulo, conforme as medidas declaradas, é: ${areaRetangulo}`;
}

const altura = parseFloat(prompt("Me informe a altura do Retangulo:"));
const base = parseFloat(prompt("Me informe a medida da base do Retangulo:"));
console.log(area(altura, base));

