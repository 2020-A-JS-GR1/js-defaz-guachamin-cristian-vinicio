const arreglo = [
    {
        id:1,
        nombre: 'Criss',
        nota: 12
    },
    {
        id:2,
        nombre: 'Paulina',
        nota: 8
    },
    {
        id:3,
        nombre: 'Gisel',
        nota: 14
    },
    {
        id:4,
        nombre: 'Darwin',
        nota: 17
    },
    {
        id:5,
        nombre: 'Kevin',
        nota: 8
    },
    {
        id:6,
        nombre: 'Raul',
        nota: 14
    },
    {
        id:7,
        nombre: 'Viviana',
        nota: 20
    },
    {
        id:8,
        nombre: 'Iralda',
        nota: 10
    },
    {
        id:9,
        nombre: 'Jordana',
        nota: 11
    },
    {
        id:10,
        nombre: 'Eddy',
        nota: 18
    }
];

// Funciones como parámetros
const respuestaFind = arreglo
    .find(
        function(valorActual, indiceActual, arregloCompelto){
            // No es necesario utilizar todos los parámetros dentro de la función.
            console.log('valorActual', valorActual)
            console.log('indiceActual', indiceActual)
            console.log('arregloCompelto', arregloCompelto)
            return valorActual.nombre === 'Criss'
        }
    )

console.log('respuestFind:', respuestaFind)

// FindIndex: -> devolver una función truty-Falsy
const respuestaIndex = arreglo
    .findIndex(
        function(valorActual, indiceActual, arregloCompelto){
            // No es necesario utilizar todos los parámetros dentro de la función.
            console.log('valorActual', valorActual)
            console.log('indiceActual', indiceActual)
            console.log('arregloCompelto', arregloCompelto)
            return valorActual.nombre === 'Criss'
        }
    )
console.log('respuestaIndex:', respuestaIndex)


// For each: -> itera el arreglo, la respuesta siempre es undefined,
const respuestaForEach = arreglo
    .forEach(
        function(valorActual, indiceActual, arregloCompelto){
            // No es necesario utilizar todos los parámetros dentro de la función.
            console.log('valorActual', valorActual)
            console.log('indiceActual', indiceActual)
            console.log('arregloCompelto', arregloCompelto)
        }
    )
console.log('respuestaForEach:', respuestaForEach)


// Map -> devolver Nuevo elemento -> clona el areglo y retorna uno nuevo
const respuestaMap = arreglo
.map(

    // Con esto se modifica el arreglo:
    // function (valorActual, indiceActual, aregloCompleto) {
    //     valorActual.nota = valorActual.nota + 1
    //     return valorActual
    // }

    // Con esto no:
    (valorActual, indiceActual, aregloCompleto) =>{
        const nuevoElemento = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota +1
        }
        return nuevoElemento
    }


)
console.log('respuestaMap' , respuestaMap)
console.log('arreglo', arreglo)

// Obtener solo las notas -> Un nuevo arreflo de solo notas
const respuestaMapNuevo = arreglo
    .map(
        // Funcion anónima -> no tiene nombre, problemas de alcance de funciones
        // Función de fecla gorda -> Con esto, se imprime el arreglo de notas sin las modificaciones
      //  function (valorActual, indiceActual, aregloCompleto) {
         (valorActual, indiceActual, aregloCompleto) => {
            return valorActual.nota
        }
    )
console.log('respuestaMapNuevo' , respuestaMapNuevo)

// Filter -> devuelve expresión Truty Falsy
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, aregloCompleto) => {
            return valorActual.nota >= 14
        }
    )
console.log('respuestaFilter' , respuestaFilter)

// Some -> expresión, devuelve booleano
// Hay alguna nota menor a 9?? SI NO
// OR
const respuestaSome = arreglo
    .some(
        (valorActual, indiceActual, aregloCompleto) => {
            return valorActual.nota < 9
        }
    )
console.log("Respuesta some: ", respuestaSome)


// Every -> expresión, devuelve booleano
// Todas las notas son mayores a 14 ?? SI NO
// AND
const respuestaEvery = arreglo
    .every(
        (valorActual, indiceActual, aregloCompleto) => {
            return valorActual.nota > 14
        }
    )
console.log("RespuestaEvery: ", respuestaEvery)


// Promedio de notas de todo el curso
// Reduce       izq -> der
// ReduceRight  der -> izq

const respuestaReduce = arreglo
    .reduce(
        (valorAcumulado, valorActual, indice, arreglo) => {
            return valorAcumulado - valorActual.nota
        },
        500 // Acumulador
    )
console.log("RespuestaReduce: ", respuestaReduce)

const arregloEstudiantesMenosresANueve = arreglo
    .map((v)=> v.nota * 1.3) // anadiendo el 30%
    .filter((nota)=> nota < 14) // busco a los menores de 14
    const totalPuntosEstudiantes = arregloEstudiantesMenosresANueve
    .reduce((acumulado, actual)=>acumulado+actual,0) // total
const notaPromedio = totalPuntosEstudiantes / arregloEstudiantesMenosresANueve.length
console.log('nota promedio', notaPromedio)

