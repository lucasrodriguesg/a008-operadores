// Faça um programa que pergunte ao usuário dois números.
let numero1 = +prompt ("Digite um numero par 1 a 9")
let numero2 = +prompt ("Digite um numero par 1 a 9")

//imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
//O primeiro numero é maior que segundo?
const maiorQue = numero1 > numero2
console.log("O primeiro é maior que o segundo?", maiorQue)
//O primeiro numero é igual ao segundo?
const igual = numero1 === numero2 
console.log("Os números são iguais?", igual)
//O primeiro numero é divisível pelo segundo?
const restoDivisao = numero1 % numero2 === 0
console.log("Podemos dividir o 1 pelo 2?", restoDivisao)
//O segundo numero é divisível pelo primeiro? 
const restoDivisao2 = numero2 % numero1 === 0
console.log("Podemos dividir o 2 pelo 1?", restoDivisao2)


