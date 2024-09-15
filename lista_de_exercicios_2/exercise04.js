/*
 4. Iterando Sobre Arrays de Objetos
 
 Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
 uma pessoa com nome, idade,e cidade. Use for of para exibir as
 informações de cada pessoa no console.
*/

// Gerando o array de objetos pessoas.
let people = [
    { name: "Carlos", age: 45, city: "Porto Alegre" },
    { name: "Luiz", age: 60, city: "Curitiba" },
    { name: "Suellen", age: 31, city: "Torres" },
    { name: "Thais", age: 25, city: "São Paulo" }
]

// Utilizando o loop for..of para printar as informações de cada pessoa.
for (let person of people) {
    console.log(`Nome: ${person.name}, Idade: ${person.age}, Cidade: ${person.city}`)
}