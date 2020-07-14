const fs = require('fs')
const inquirer = require('inquirer')

function promesaLeerArchivo(path) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        console.log("Error de lectura", error)
                        reject(error)
                    } else {
                        console.log("[Leyendo el archivo]")
                        let obj = JSON.parse(contenido)
                        resolve(obj)
                    }
                }
            )
        }
    )
}

function promesaEscribirArchivo(path, contenidoActual) {

    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoActual,
                'utf-8',
                (error) => {
                    if (error) {
                        console.log("Error de escritura", error)
                        reject(error)
                    } else {
                        // contenidoActual.recetas.push(contenidoNuevo)
                        console.log("contenidoActual:", contenidoActual)
                        // resolve(JSON.stringify(contenidoActual))
                        resolve()
                        console.log("[¡Cambios guardados!]")
                    }
                })
        }
    )
}

async function ejecutarPromesas(path) {
    try {
        const contenidoNuevo = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingresa tu nombre:'
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingresa tu edad:'
            }
        ])
    //    console.log(contenidoNuevo)
        const contenidoActual = await promesaLeerArchivo(path)
        console.log("data actual:", contenidoActual)
        // const data = contenidoActual.recetas.push(contenidoNuevo)
        contenidoActual.recetas.push(contenidoNuevo)
        console.log("data despues de push:", contenidoActual)
        // const data2 = JSON.stringify(data); // convierte a JSON
        //   console.log(contenidoActual)
        // console.log("data final:", data2)
        const dataActual = await promesaEscribirArchivo(path, JSON.stringify(contenidoActual))
        // const contenido2 = await promesaLeerArchivo(path);

    } catch (error) {
        console.log('error', error)
    }
}

ejecutarPromesas('./04_Recetas_DB.json')
