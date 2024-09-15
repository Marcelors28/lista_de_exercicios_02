/*
 8. Criando Novos Arrays a Partir de Objetos

 Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
 diretor, e anoLancamento. Use forEach para criar um novo array
 contendo apenas os títulos dos filmes.
*/

// Criando o array de objetos filmes
let films = [
    { title: "Filme 1", director: "Diretor 1", yearLauch: 1998 },
    { title: "Filme 2", director: "Diretor 2", yearLauch: 2015 },
    { title: "Filme 3", director: "Diretor 3", yearLauch: 2022 }
]

// Criando um novo array apenas os títulos dos filmes
let titles = []
films.forEach(film => {
    titles.push(film.title)
})

// Printando os títulos dos filmes
console.log(titles)

