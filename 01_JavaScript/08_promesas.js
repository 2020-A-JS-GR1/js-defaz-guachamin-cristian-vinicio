const fs = require('fs')

function promesaEsPar(numero){
    return new Promise( // Definicion de la promesa
        (resolve, reject) => {
            if (numero % 2 === 0) {
                resolve(numero)
            } else {
                reject('No es par =(')
            }
        }
    )
}

function promesaElevarAlCuadrado(numero){
    return new Promise( // Definicion de la promesa
        (resolve, reject) => { // Aqui nunca va a fallar la promesa, no se usará reject
            resolve(
                Math.pow(numero, 2)
            )
        }
    )
}

promesaEsPar(4) // Uso de la promesa
    .then( // try -> se ejecuta esta parte si 'resolve' está activo
        (numeroPar) => {
            console.log('contenido then:', numeroPar)
            return promesaElevarAlCuadrado(numeroPar) // retorna solo 1 sola promesa
        }
    )
    .then(
        (numeroParAlCuadrado) => {
            console.log("Numero par al cuadrado: ", numeroParAlCuadrado)
        }
    )
    .catch( // catch -> se ejecuta esta parte si 'reject' está activo
        (error)=>{
            console.log('contenido catch:', error)
        }
    )
// No es necesario varios catch cuando existan varias promesas, basta con uno.


