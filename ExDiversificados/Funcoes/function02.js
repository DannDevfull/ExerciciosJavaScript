function Somar(n1, n2){
    let res = n1 + n2
    return res
}

console.log(Somar(5, 5))

console.log('-----------------------')
// Ou, nem precisávamos de uma variável que recebesse um valor. Veja:
function Somar (n1, n2){
    // Posso passar parâmetros opcionais para caso alguns parâmetro não receba alguns valor corretamente;
    // Fazemos isso com o n1 = 0, n2 = 0; ou seja, caso n1 não seja passado, ele vale 0.
    return n1 + n2
}
console.log(Somar(5, 2))