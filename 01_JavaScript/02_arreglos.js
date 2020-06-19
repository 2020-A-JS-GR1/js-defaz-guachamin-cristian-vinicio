//const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arreglo = [1, 4, 5, 6, 8, 9, 10]
// arreglo = 1; // inmutable, no se puede reasignar.
let cualquierCosa = "ASD"
/*
cualquierCosa = 1
cualquierCosa = true
cualquierCosa = undefined
cualquierCosa = null
 */
// En JS pueden ser de cualquier tipo de datos
const arregloTodo = [
    true, 1, 1.2, "Criss", undefined, null, {},[1, 2, true, "A"]
]

// Ciclos
//for of -> devuelve valores
for (let numero of arreglo){
    console.log('numero',numero)
}

// for in -> devuelve índices de posiciones
for (let numero in arreglo){
    console.log('numero',numero)
}

// Operaciones básicas con arreglos
// Añadir un elemento al arreglo
// Los arreglos son constantes y no se pueden reasignar.
// Push -> añade un elemento al final del arreglo
arreglo.push(11)
console.log(arreglo)
// Pop -> eliminar al final un elemento
arreglo.pop()
console.log(arreglo)
// unshift -> añade un elemento al principio del arreglo
arreglo.unshift(5)
console.log(arreglo)
// insertar / borra elementos en cualquier posición
arreglo.splice(0,1) // borra desde la posicion 0 y el # de elementos segun deleteCount
console.log(arreglo)
arreglo.splice(0,0,3,4,5) // agregar 3, 4, 5 desde la posocion 0
console.log(arreglo)
// Borrar un elemento específico mediante su índice
arreglo.findIndex() // para operadores
const indice = arreglo.indexOf(9) // retorna el índice del elemento, -1 si no existe
console.log('indice',indice) // si hay varios elementos repetidos, devuelve el del primero
arreglo.splice(indice,1)

