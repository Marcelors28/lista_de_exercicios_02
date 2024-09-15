/*
6. Filtrando Arrays de Objetos

 Objetivo: Crie um array de objetos funcionarios, onde cada objeto
 contém informações como nome, cargo, e salario. Use for of para filtrar
 e exibir apenas os funcionários cujo salário seja maior que um valor
 específico
*/

// Gerando o array de objetos 
const workers = [

    {name: "João", position: "Operador de produção", salary: 1500},
    {name: "Maria", position: "Gerente de logistica", salary: 6000},
    {name: "Paulo", position: "Inspetor de qualidade", salary: 2300},
    {name: "Soraia", position: "Inspetor de segurança", salary: 3100}
]

// definindo o maior valor especifico 
const salarySpecific = 3000

//Gerando o loop for..of para filtrar o maior salário
for (const worker of workers){

    if(worker.salary > salarySpecific){
        console.log(`Nome: ${worker.name}, Cargo: ${worker.position}, Salário: ${worker.salary}`)
    }
}