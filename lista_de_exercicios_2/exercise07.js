/*
7. Modificando Objetos em um Array
 Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
 preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
 os produtos e exibir o novo preço.

 */

//  Criando array de objetos produtos
let products = [
    { name: "Produto 1", price: 161, discount: 0 },
    { name: "Produto 2", price: 310, discount: 0 },
    { name: "Produto 3", price: 476, discount: 0 }
]

// Gerando o desconto de 10% em todos os produtos
products.forEach(product => {
    product.discount = product.price * 0.10
    product.price = product.price - product.discount
})

// Printando o preço dos produtos com desconto
products.forEach(product => {
    console.log(`Nome: ${product.name}, Preço com desconto: R$${product.price.toFixed(2)}`)
})