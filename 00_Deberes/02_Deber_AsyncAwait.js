const fs = require('fs')

function promesaLeerArchivo(path) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if(error){
                        console.log("Error de lectura", error)
                        reject(error)
                    }else{
                        console.log("[Leyendo el archivo]")
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
                        console.log("Error de escritura", error)
                        reject(error)
                    }else{
                        resolve(contenido)
                        console.log("[¡Cambios guardados!]")
                    }
                })
        }
    )
}

async function ejecutarPromesas(path, contenidoNuevo) {
    try {
        const contenidoActual = await promesaLeerArchivo(path)
        console.log("\n[Escribiendo al archivo]")
        await promesaEscribirArchivo(path, contenidoActual, contenidoNuevo)
        console.log("\n[Volviendo a leer]")
        await promesaLeerArchivo(path);
    } catch (error) {
        console.log("Error de lectura / escritura: \n", error)
    }
}

ejecutarPromesas('./02_ejemplo_deber.txt', "Buenas noches :D x2")


