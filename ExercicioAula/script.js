//Se tenho 15,00 e recebo 22,40. Quanto tenho no final?
const num1 = 15
const num2 = 22.40
let carteira = num1 + num2
console.log("Sua conta possui", carteira)
//Gastei 12.34. Quanto tenho no final
const num3 = 12.34
let carteira2 = carteira - num3
console.log("Sua conta depois da compra:",carteira2)
//Dividi igualmente entre dois irmãos
const num4 = carteira2 / 3 
console.log("Cada irmão deve ficar com:", num4)
//Rendimento 3.42
const num5 = num4 * 3.42
console.log("Seu dinheiro rendeu, agora você possui:", num5)
