/*
12. Atualizando um Array de Objetos

 Objetivo: Crie um array de objetos estoque, onde cada objeto tem
 produto, quantidade e minimo. Use forEach para atualizar a quantidade
 dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

const stockObjects =[ // criando array de objetos estoque

    {product: "Tomate", quantity: 10, minimum: 5},
    {product: "Cebola", quantity: 7, minimum: 6},
    {product: "Banana", quantity: 4, minimum: 7},
    {product: "Maçã", quantity: 3, minimum: 5}
]

stockObjects.forEach(stockObject =>{    //forEach para atualizar a quantidade de produtos quando abaixo do minimo
    if(stockObject.quantity < stockObject.minimum){
        stockObject.quantity *= 2
    }
})

console.log(stockObjects) // printando a lista atualizada
