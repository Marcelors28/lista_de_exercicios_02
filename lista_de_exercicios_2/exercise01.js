/*   
1. Acessando Propriedades de Objetos

 Objetivo: Crie um objeto carro com propriedades como marca, modelo,
 ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
 valores no console.

 */

// Criando objeto carro
let car = {
    brand: "Hyundai",
    model: "HB20",
    year: 2024,
    color: "Branco"
}

// Iteração sobre as propriedades do objeto carro
for (let properties in car) {
    console.log(`${properties}: ${car[properties]}`)
}