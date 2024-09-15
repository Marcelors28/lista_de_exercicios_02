/*
2. Verificando Propriedades

 Objetivo: Crie um objeto livro com propriedades titulo, autor,
 anoPublicacao e genero. Verifique se a propriedade editora existe no
 objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

*/

// Criando objeto livro
let book = {
    title: "Entendendo algoritmos",
    author: "Aditya Bhargava",
    yearPublic: 2017,
    gender: "Programação"
}

// verificando e adicionando a editora
let propertiesExist = false

for (let properties in book) {
    if (properties === "publisher") {
        propertiesExist = true
        break
    }
}

if (!propertiesExist) {
    book.publisher = "Novatec"
}

console.log(book)