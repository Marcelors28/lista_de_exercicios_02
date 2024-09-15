/*
3. Filtrando Propriedades de Objetos

 Objetivo: Dado um objeto produto com várias propriedades, crie uma
 função que retorna um novo objeto contendo apenas as propriedades cujo
 valor seja maior que um valor específico. Use for in para filtrar as
 propriedades.

 */

 function filtrarPropriedades(produto, valorEspecifico) {
    let novoObjeto = {}
    for (let propriedade in produto) {
        if (produto[propriedade] > valorEspecifico) {
            novoObjeto[propriedade] = produto[propriedade]
        }
    }
    return novoObjeto
}

let produto = {
    preco: 280,
    peso: 3,
    quantidade: 15,
    desconto: 5
}

let resultado = filtrarPropriedades(produto, 7)
console.log(resultado) 