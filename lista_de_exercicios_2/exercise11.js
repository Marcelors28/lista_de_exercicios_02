/*
11.
 Agrupando Elementos com forEach
 
 Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
 cliente, produto, e quantidade. Use forEach para criar um objeto que
 agrupa a quantidade total de produtos por cliente.

 */


  const orders = [
        { client: "Marcelo", product: "Caneta", quantity: 10 }, // criando array de objetos
        { client: "Carlos", product: "Borracha", quantity: 5 },
        { client: "Maria", product: "Lápis", quantity: 8 },
        { client: "Pedro", product: "Régua", quantity: 6 }
       
    ]

let totForClient = {} // variavel para armazenar a quantidade de produtos

    orders.forEach(order =>{  //forEach para agrupar a quantitade total de produtos
        if(totForClient[order.client]){
            totForClient[order.client] += order.quantity
        } else {
            totForClient[order.client] = order.quantity
        }
    })

    console.log(totForClient) // printando a quantidade total por pedido