const fs = require('fs')
const inquirer = require('inquirer')
const pathComida = './04_Comidas_DB.json'

/* Muestra el menú del sistema y los entrads de texto (inputs) */
async function mostrarMenuPrincipal() {
    try {
        const menu = await inquirer.prompt([
            {
                type: 'number',
                name: 'opcionMenu',
                message: 'Seleccione una opción:\n1) Ver comidas\n' +
                    '2) Nueva comida\n3) Editar Comida\n3) Eliminar comidas:\n'
            }
        ])
        switch (menu["opcionMenu"]) {
            case 1:
                return listarComidaDB()
            case 2:
                const nuevaComida = await inquirer.prompt([
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
                const comidaAEditar = await inquirer.prompt([
                    {
                        type: 'number',
                        name: 'idComidaAEditar',
                        message: 'Ingrese el id:'
                    },
                    {
                        type: 'number',
                        name: 'campoAEditar',
                        message: 'Seleccione el campo a editar:\n1. Nombre\n2. Descripcion\n' +
                            '3. NumeroPersonas\n4. Nacionalidad\n5. Picante:\n'
                    }
                ])
                switch (comidaAEditar["campoAEditar"]) {
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
                }

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
        console.log("[Comidas disponibles]")
        const listaComidas = await promesaLeerArchivoDB(pathComida)
        listaComidas["comidas"].forEach(
            (comidaActual) => {
                console.log("id: " + comidaActual["id"] + " " + comidaActual["nombreComida"])
            }
        )
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
        const idNuevaComida = listaComidas["comidas"][listaComidas["comidas"].length - 1].id
        nuevaComida.id = idNuevaComida + 1 // Agregando una id
        listaComidas["comidas"].push(nuevaComida)
        await promesaEscribirArchivoDB(listaComidas)
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
        const indiceComida = listaComidasActualizadas["comidas"].findIndex(
            comidaActual => comidaActual["id"] === idComida
        )
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
        listaComidasActualizadas["comidas"][indiceComida] = comidaAEditar
        return await promesaEscribirArchivoDB(listaComidasActualizadas)
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

main()

