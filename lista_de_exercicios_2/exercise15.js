/*
 15. Filtrando e Somando Valores

 Objetivo: Crie um array de objetos transacoes, onde cada transação tem
 tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
 somando as entradas e subtraindo as saídas.
 */

const transactions =[ 

    {type: "entry", value: 80},
    {type: "entry", value: 100},
    {type: "exit", value: 30},
    {type: "exit", value: 50}
    
] 

let endingBalance = 0

transactions.forEach(transaction =>{
    if(transaction.type === "entry"){
        endingBalance += transaction.value
    } else if (transaction.type === "exit"){
        endingBalance -= transaction.value
    }
})

console.log(`Saldo final: R$ ${endingBalance}`)


