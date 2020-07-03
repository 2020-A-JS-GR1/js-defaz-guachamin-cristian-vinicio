/*
Hacer una función que mke acepte como parámetro una variable con el path del archivo y el contenido a agregar
La función debe toar estos 2 parámetros y leer el archivo y añadir el texto al final del archivo.
Al final vamos a leer el archivo nuevamente e imprimirlo en consola.
Todoo esto debe ser realizado con promesas

Utilizar 2 promesas, 1 promesa que lea y luego que funcion, luego una promesa que escriba y que funcione.
 */

const fs = require('fs')

function promesaLeerArchivo(path) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if(error){
                        console.log("Hubo error de lectura", error)
                        reject(error)
                    }else{
                        console.log("Leyendo el archivo: ")
                        console.log(contenido)
                        resolve(contenido)
                    }
                }
            )
        }
    )
}

function promesaEscribirArchivo(path, contenido, contenidoNuevo) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenido+'\n'+contenidoNuevo,
                'utf-8',
                (error) =>{
                    if(error){
                        console.log("Hubo error de escritura", error)
                        reject(error)
                    }else{
                        resolve(contenido)
                        console.log("Cambios guardados !")
                    }
                })
        }
    )
}

function ejecutarPromesas(path, contenidoNuevo){
    promesaLeerArchivo(path)
        .then(
            (contenido)=>{
                console.log("Escribiendo al archivo")
                return promesaEscribirArchivo(path, contenido, contenidoNuevo )
            }
        )
        .then(
            ()=> {
                console.log("Volviendo a leer")
                return promesaLeerArchivo(path)
            }
        ).catch(
        (error)=>(console.log('contenido catch:', error))

    )
}

ejecutarPromesas('./06_ejemplo.txt', "Todo belén x3 :D")





