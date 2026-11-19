// Exercício 8
// Celsius para fahrenheit
const conversaoTemperatura = (temperatura) => {
    let fahrenheit = (temperatura * 1.8) + 32;
    return `A temperatura convertida de Celsius para fahrenheit é: ${fahrenheit}°F`;
};

console.log(conversaoTemperatura(parseFloat(prompt("Me informa a sua temperatura, em Celsius, atual."))));
