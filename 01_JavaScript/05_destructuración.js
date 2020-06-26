const criss = {
    nombre: "Criss"
}
const carolina = {
    apellido: "Defaz"
}

// juntar objetos
const crissCarolina = {
    ...criss,
    ...carolina
}

crissCarolina.nombre = "Carolina"
console.log(crissCarolina)
console.log('criss', criss)

const arregloUno = [1, 2, 3, 4, 5]
const arregloDos = [6, 7, 8, 9, 10]
const superArreglo = [
    ...arregloUno,
    ...arregloDos
]


superArreglo[0] = 100
console.log('superArreglo', superArreglo)
console.log('arregloUno', arregloUno)
// Si hay mismos valores en ambos arreglos, toma todos los valores
// simplemente se repiten
// Se quita la ultima referencia y se clona el arreglo

