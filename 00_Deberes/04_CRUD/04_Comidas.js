const fs = require('fs')
const inquirer = require('inquirer')
const pathComida = './04_Comidas_DB.json'

/* Muestra el menú del sistema y los entradas de texto (inputs) */
async function mostrarMenuPrincipal() {
    try {
        const menu = await inquirer.prompt([
            {
                type: 'number',
                name: 'opcionMenu',
                message: 'Menú Principal.- Seleccione una opción:\n1. Mostrar comidas\n' +
                    '2. Nueva comida\n3. Editar Comida\n4. Eliminar comida:\n5. Salir\n'
            }
        ])
        switch (menu["opcionMenu"]) { // Acciones de menu principal
            case 1: // Vista de comidas disponibles
                await listarComidaDB()
                return mostrarMenuPrincipal()
            case 2:
                const nuevaComida = await inquirer.prompt([ // Formulario nueva comida
                    {
                        type: 'input',
                        name: 'nombreComida',
                        message: 'Nombre comida:'
                    },
                    {
                        type: 'number',
                        name: 'cantidadCom',
                        message: 'Cantidad de personas:'
                    }
                ])
                return agregarComidaDB(nuevaComida)
            case 3:
                await listarComidaDB()
                const comidaAEditar = await inquirer.prompt([ // Formulario comida a editar
                    {
                        type: 'number',
                        name: 'idComidaAEditar',
                        message: 'id Comida a editar:'
                    },
                    {
                        type: 'number',
                        name: 'campoAEditar',
                        message: 'Seleccione el campo a editar:\n1. Nombre\n2. Descripcion\n' +
                            '3. NumeroPersonas\n4. Nacionalidad\n5. Picante:\n'
                    }
                ])
                switch (comidaAEditar["campoAEditar"]) { // Acciones de campo a editar
                    case 1:
                        const nuevoNombre = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevoNomComida',
                                message: 'Nuevo nombre:'
                            }
                        ])
                        return editarComidaDB(comidaAEditar["idComidaAEditar"], 1, nuevoNombre["nuevoNomComida"])
                    case 2:
                        const nuevaDesc = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevaDescComida',
                                message: 'Nueva descripción:'
                            }
                        ])
                        return editarComidaDB(comidaAEditar["idComidaAEditar"], 2, nuevaDesc["nuevaDescComida"])
                    default:
                        console.log("Opcion no válida")
                        break
                }
                break
            case 4:
                await listarComidaDB()
                const idABorrar = await inquirer.prompt([ // Acción de Borrado
                    {
                        type: 'number',
                        name: 'idComidaABorrar',
                        message: 'id Comida a Eliminar:'
                    }
                ])
                return eliminarComida(idABorrar["idComidaABorrar"])
            default:
                break
        }
    } catch (error) {
        console.log('error', error)
    }
}

/* Lee el archivo JSON y retorna un objeto JS */
function promesaLeerArchivoDB() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                pathComida,
                'utf-8',
                (error, comidas) => {
                    if (error) {
                        console.log("Error de lectura", error)
                        reject(error)
                    } else {
                        resolve(JSON.parse(comidas))
                    }
                }
            )
        }
    )
}

/* Recibe un objeto JS, lo convierte a JSON y lo envia al archivo */
function promesaEscribirArchivoDB(comidasActuales) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                pathComida,
                JSON.stringify(comidasActuales),
                'utf-8',
                (error) => {
                    if (error) {
                        console.log("Error de escritura", error)
                        reject(error)
                    } else {
                        resolve()
                        console.log("[¡Cambios guardados!]")
                    }
                })
        }
    )
}

/* Muestra una lista de todas las comidas disponibles y su id*/
async function listarComidaDB() {
    try {
        console.log("|******** Menú del día ********|")
        const listaComidas = await promesaLeerArchivoDB(pathComida)
        listaComidas["comidas"].forEach(
            (comidaActual) => {
                console.log("id: " + comidaActual["id"] + " Comida: " + comidaActual["nombreComida"])
            }
        )
        console.log("|******************************|")
    } catch (error) {
        console.log('error', error)
    }
}

/* Recibe un id y retorna su respectivo objeto comida */
async function buscarComidaDB(id) { // Devuelve un objeto comida según id
    try {
        const listaComidas = await promesaLeerArchivoDB(pathComida)
        return listaComidas["comidas"].find(
            comida => comida["id"] = id
        )
    } catch (error) {
        console.log('error', error)
    }
}

/* Recibe un objeto comida, lo procesa y lo envia a la proomesa de escritura */
async function agregarComidaDB(nuevaComida) {
    try {
        const listaComidas = await promesaLeerArchivoDB(pathComida)
        /* Crea una id para la nueva comida a partir del id de la última comida del archivo */
        const idNuevaComida = listaComidas["comidas"][listaComidas["comidas"].length - 1].id
        nuevaComida.id = idNuevaComida + 1
        listaComidas["comidas"].push(nuevaComida)
        await promesaEscribirArchivoDB(listaComidas)
        await mostrarMenuPrincipal()
    } catch (error) {
        console.log('error', error)
    }
}

/* Recibe el id de la comida, el campo a editar y el nuevo dato para enviar los cambios al archivo */
async function editarComidaDB(idComida, campoAEditar, nuevoDatoComida) {
    try {
        console.log("idcomida: "+idComida)
        const comidaAEditar = await buscarComidaDB(idComida)
        const listaComidasActualizadas = await promesaLeerArchivoDB()
        const posicionComidaActual = listaComidasActualizadas["comidas"].findIndex(
            comidaActual => comidaActual["id"] === idComida
        )
        /* El cambio se realiza según el campo a editar seleccionado en el menu */
        switch (campoAEditar) {
            case 1: // Cambiar el nombre
                comidaAEditar["nombreComida"] = nuevoDatoComida
                break
            case 2: // Cambiar la descripción
                comidaAEditar["cantidadCom"] = nuevoDatoComida
                break
            default:
                console.log("Opcion no válida")
                break
        }
        /* El nuevo objeto editado reemplaza al anterior en la misma posición */
        listaComidasActualizadas["comidas"].splice(posicionComidaActual, 1, comidaAEditar)
        await promesaEscribirArchivoDB(listaComidasActualizadas)
        await mostrarMenuPrincipal()
    } catch (error) {
        console.log('error', error)
    }
}

/* Recibe el id de un objeto comida y lo elimina */
async function eliminarComida(idComida){
    try {
        const listaComidasActualizadas = await promesaLeerArchivoDB()
        const indiceComida = listaComidasActualizadas["comidas"].findIndex(
            comidaAEliminar => comidaAEliminar["id"] === idComida
        )
        listaComidasActualizadas["comidas"].splice(indiceComida, 1)
        await promesaEscribirArchivoDB(listaComidasActualizadas)
        await mostrarMenuPrincipal()
    } catch (error) {
        console.log('error', error)
    }
}

async function main(){
    try {
        await mostrarMenuPrincipal()
    }catch (error) {
        console.log('error', error)
    }
}

main().then(()=>console.log("by Cristian Defaz, buenas tardes :D") )

