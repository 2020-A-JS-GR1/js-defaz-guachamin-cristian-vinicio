const fs = require('fs') // importar en JavaScript
console.log('Primero') // línea síncrona

fs.readFile( // Línea ASÍNCRONA,
    './06_ejemplo.txt',
    'utf-8',
    (error, contenido) => { // CALLBACK :> entra en una cola de espera.
        console.log("Segundo")
        if(error){
            console.log("Hubo error", error)
        }else{
            console.log(contenido)
        }
    }
)
// Esta función es asíncrona porque la función readFile
// necesita preguntar a FileSystem por el archivo para poder continuar.
// Si hay 2 funciones asíncronas, no se sabe cual se ejecuta primero.

// Ejemplo de código en modo síncrono:
// No existe en JS este tipo de código para esta función.
// const respuesta  = fs.readFile( // Línea ASÍNCRONA
//     './06_ej
// )

const suma = 5 + 3 // linea sincrona
console.log('Suma ', suma) // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona
console.log('Final') // línea síncrona


