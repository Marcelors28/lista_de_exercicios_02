/*
14. Manipulando Objetos Complexos

 Objetivo: Crie um objeto empresa com uma propriedade departamentos,
 que é um array de objetos. Cada departamento tem um nome e uma lista
 de funcionarios. Use for in e for of para iterar sobre os departamentos
 e seus funcionários, exibindo o nome de cada funcionário junto com o
 departamento ao qual pertence.
*/

const company = { 

    departments: [ 

        {name: "Compras", employees: ["Maria", "João", "Pedro"]},
        {name: "TI", employees: ["José", "Taís", "Carla"]},
        {name: "RH", employees: ["Manoel", "Juliana", "Leticia"]},
        {name: "Comercial", employees: ["Marcelo", "Juliano", "Paulo"]}
           
    ]
}

for (const department of company.departments){
    for (const employee of department.employees){
        console.log(`Funcionário: ${employee}, Departamento: ${department.name}`)
    }
}