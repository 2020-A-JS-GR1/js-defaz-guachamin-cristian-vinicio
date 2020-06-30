const fs = require('fs')
/*
Hacer una función que me acepte como parámetro una variable con el path del archivo y el contenido
a agregar al archivo.
La función debe tomar estos 2 parámetos y leer el archivo y añadir el texto al final del archivo
 */

// Resuelto por mí :D
function escribirArchivo(path, contenidoNuevo) {
    // fs.readfile(path, codificacion, callback(error, contenido))
    // fs.writefile(path, contenifo, codificacion, callback(error))
    fs.readFile(
        path,
        'utf-8',
        (error, contenido) => {
            if(error){
                console.log("Hubo error de lectura", error)
            }else{
                fs.writeFile(
                    path,
                    contenido+'\n'+contenidoNuevo,
                    'utf-8',
                    (error) =>{
                        if(error){
                            console.log("Hubo error de escritura", error)
                        }else{
                            console.log("Cambios guardados !")
                        }
                    })
               // console.log(contenido)
            }
        }
    )
}
escribirArchivo('./06_ejemplo.txt','Todo bien ???');


