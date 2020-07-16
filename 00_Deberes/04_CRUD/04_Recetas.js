const fs = require('fs')
const inquirer = require('inquirer')
const path = './04_Recetas_DB.json'

function promesaLeerArchivo(path) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, comidas) => {
                    if (error) {
                        console.log("Error de lectura", error)
                        reject(error)
                    } else {
                        // console.log("[Leyendo el archivo]")
                        resolve(JSON.parse(comidas))
                    }
                }
            )
        }
    )
}

function promesaEscribirArchivo(path, comidasActuales) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                comidasActuales,
                'utf-8',
                (error) => {
                    if (error) {
                        console.log("Error de escritura", error)
                        reject(error)
                    } else {
                        // console.log("Comidas actuales:\n", comidasActuales)
                        resolve()
                        console.log("[¡Cambios guardados!]")
                    }
                })
        }
    )
}

async function agregarComida(path) {
    try {
        const nuevaComida = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombreComida',
                message: 'Nombre comida:'
            },
            {
                type: 'number',
                name: 'cantidad',
                message: 'Cantidad:'
            }
        ])
        const comidasActuales = await promesaLeerArchivo(path)
        const ultimoID = comidasActuales.comidas[comidasActuales.comidas.length-1].id
        console.log("ultimoID", ultimoID)
        nuevaComida.id = ultimoID + 1 // asignar id
        comidasActuales.comidas.push(nuevaComida)
        const dataActual = await promesaEscribirArchivo(path, JSON.stringify(comidasActuales))

    } catch (error) {
        console.log('error', error)
    }
}

async function buscarComida(id){ // Devuelve un objeto comida según id
    try {
        const comidasActuales = await promesaLeerArchivo(path)
        // console.log(comidasActuales)
        const comidaEncontrada = comidasActuales.comidas.find(
            (comidaActual)=>{
                // console.log(comidaActual)
                return comidaActual.id === id
            }
        )
        console.log(comidaEncontrada)
    }catch (error) {
        console.log('error', error)
    }

}

async function editarComida(comidaAEditar, opcion){
    try {
        const nuevoDato = await inquirer.prompt([
            {
                type: 'input',
                name: 'nuevoDato',
                message: 'Ingrese el nuevo dato'
            }
        ])

    }catch (e) {

    }

}

async function mostrarMenuEdicion(){
    try {
        const menu = await inquirer.prompt([
            {
                type: 'number',
                name: 'opcionMenu',
                message: 'Seleccione la opción a editar:\n' +
                    '1) Nombre\n' +
                    '2) Descripción de\n' +
                    '3) Nacionalidad\n' +
                    '4) Costo\n' +
                    '5) Valor\n'
            }
        ])
        if(menu.opcion < 4){
            switch (menu.opcion) {
                // case 1: return await editarComida(nombre)
                case 2: return console.log("Escogiste la 2")
                case 3: return console.log("Escogiste la 3")
                case 4: return console.log("Escogiste la 3")
                case 5: return console.log("Escogiste la 3")
            }
        }else{
            console.log('Opción no válida', error)
        }
    } catch (e) {
        console.log('error', error)
    }

}

async function mostrarMenuPrincipal(){
    try {
        const menu = await inquirer.prompt([
            {
                type: 'number',
                name: 'opcion',
                message: 'Seleccione una opción:\n' +
                    '1) Agregar comida\n' +
                    '2) Editar comida\n' +
                    '3) Borrar comida\n' +
                    '3) Mostrar comidas:\n'
            }
        ])
        switch (menu.opcion) {
            case 1: return agregarComida('./04_Recetas_DB.json')
            case 2: return console.log("Escogiste la 2")
            case 3: return console.log("Escogiste la 3")
        }
    } catch (e) {
        console.log('error', error)
    }

}



// agregarComida('./04_Recetas_DB.json')
// mostrarMenu()
console.log(buscarComida(2))


