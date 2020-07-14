const arregloUno = [1, 2, 3, 4, 5]
const arregloDos = [6, 7, 8, 9, 10]
const superArreglo = [
    ...arregloUno,
    ...arregloDos
]


superArreglo[0] = 100
console.log('superArreglo', superArreglo)