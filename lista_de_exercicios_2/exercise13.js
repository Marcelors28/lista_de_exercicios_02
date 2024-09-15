/*
13. Implementando um Carrinho de Compras

Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/


const cart = { 

items: [ 

        {product: "Meias", quantity: 5, unitPrice: 1.90},
        {product: "Camisetas", quantity: 3, unitPrice: 50},
        {product: "Calças", quantity: 2, unitPrice: 100},
        {product: "Tênis", quantity: 1, unitPrice: 200}      
    ]
}

let totalValue = 0


cart.items.forEach(item => {
    totalValue += item.quantity * item.unitPrice
  })
  
  console.log(`Valor total do carrinho é: R$ ${totalValue.toFixed(2)}`)
