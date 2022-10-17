//Escreva as operações lógicas abaixo em formato de código


// O simbolo && = E
// && retorna TRUE se: esse é true -> E <- esse também é true

// 5 é maior que 20 e também é menor que 2
const maiorQue = 5 > 20 && 5 < 2
console.log ("5 é maior que 20 e também é menor que 2:", maiorQue)

// O simbolo || = OU
// || retorna TRUE se: esse é true -> OU <- esse também é true
//5 é igual a 5 ou é igual a “5”
const igualQue = 5 === 5 || 5 === "5"
console.log ("5 é igual a 5 ou é igual a “5”", igualQue)

// O simbolo ! = NEGAÇÃO
// ! retorna CONTRARIO: esse é TRUE fica FALSE - esse é FALSE fica TRUE
//negação de (vinte é maior que cinquenta)
const negacao1 = 20 > 50
console.log("vinte é maior que cinquenta (resposta com negação)", !negacao1)

// negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta
const negacao2 = 20 > 50 || 50 > 60 
console.log("20 > 50 || 50 > 60 (resposta com negação)", !negacao2)
