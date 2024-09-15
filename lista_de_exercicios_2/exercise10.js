/*

 10. Criando Relatórios com Objetos e Arrays
 
 Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
 quantidade e valor. Use forEach para calcular o valor total de vendas de
 todos os produtos.

 */

// criando o array vendas
 const sales = [
        { product: "Monitor", quantity: 2, value: 2000 }, // criando array de objetos
        { product: "Notebook", quantity: 2, value: 4000 },
        { product: "Teclado", quantity: 1, value: 200 },
        { product: "Mouse", quantity: 1, value: 100 }
    ]

// variavel para guardar o total de vendas
let totSales = 0

// forEach para calcular o total de vendas
sales.forEach(sale => { 
    totSales += sale.quantity * sale.value
})

// printando o total de vendas
console.log(`Valor total das vendas: ${totSales}`) 