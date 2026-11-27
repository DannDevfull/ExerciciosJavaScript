// Introdução a objetos
let amigo = {
    nome: 'José',
    sexo: 'Masculino',
    peso: 86.4,
    engordar(p=0){
        // Consigo colocar functions dentro de um objeto
        this.peso += p
        // "this" é uma palavra que faz referência ao objeto.
        // Vou passa-lo para o parâmetro que, caso não receba, é igual a 0 (indicado pelo =0)
    }
}
// console.log(amigo)
// console.log(amigo.nome)
// posso também fazer dessa maneira:
amigo.engordar(2)
// Veja, estou passando um argumento para a minha function que está dentro de um objeto!
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)