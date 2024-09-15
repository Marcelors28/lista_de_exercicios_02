/*
 5. Calculando Valores em Arrays de Objetos
 
 Objetivo: Crie um array de objetos alunos, cada um com propriedades
 nome, nota1, e nota2. Use for of para calcular a média das notas de cada
 aluno e exibir o nome do aluno junto com sua média.
*/

//gerando array de objetos alunos.
let students = [

    { name: "Carlos", note1: 8, note2: 7 },
    { name: "João", note1: 6, note2: 8 },
    { name: "Marcos", note1: 5, note2: 6 },
    { name: "Débora", note1: 9, note2: 10 }
]

//gerando um loop for..of para calcular a média das notas.
for (let student of students){

    let media = (student.note1 + student.note2) / 2
    console.log(`Nome: ${student.name}, Média: ${media}`)
}