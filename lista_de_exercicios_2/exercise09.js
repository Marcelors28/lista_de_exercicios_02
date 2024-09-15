/*

9. Contabilizando Elementos com uma Condição

 Objetivo: Crie um array de objetos clientes, cada um com propriedades
 nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
 de 30 anos.

 */

 //Criando o array de objetos filmes
 let clients = [
        { name: "Marcelo", age: 32, city: "Porto-alegre" },
        { name: "Suellen", age: 31, city: "Curitiba" },
        { name: "Paulo", age: 50, city: "Florianópolis" },
        { name: "Maria", age: 25, city: "Canoas" }
    ]

// Contagem de clientes com mais de 30 anos
let count = 0

//forEach para realizar a contagem
clients.forEach(client => {
    if (client.age > 30) {
        count++
    }
})

//printando a contagem
console.log(`Número de clientes com mais de 30 anos é: ${count}`)