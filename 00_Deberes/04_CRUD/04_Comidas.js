const fs = require('fs')
const inquirer = require('inquirer')
const pathComida = './04_Comidas_DB.json' //DB Comida
const pathIngredientes = './04_Ingredientes_DB.json' //DB Ingredientes
const tipoIngrediente = ["Carne/Embutido", "Lacteo", "Cereal/Harina", "Aceite/grasa"
    , "Sales/azucares", "Fruta/Legumbre", "Marisco", "Bebida"]

/* Muestra el menú del sistema y sus 2 opciones generales */
async function mostrarMenuPrincipal() {
    try {
        const menuPrincipal = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcionMenuPrinc',
                message: 'Menú Principal.- Seleccione una opción:',
                choices: ["Comidas", "Ingredientes", "Salir"]
            }
        ])
        switch (menuPrincipal["opcionMenuPrinc"]) {
            case "Comidas":
                return await mostrarMenuComida()
            case "Ingredientes":
                return await mostrarMenuIngredientes()
            case "Salir":
                break
            default:
                console.log(":(")
                break
        }
    } catch (error) {
        console.log('error', error)
    }
}

/*-*-*-*-*-*-*-*-*-*-* Funciones de gestión de archivo *-*-*-*-*-*-*-*-*-*-*/

/* Lee el archivo JSON y retorna un objeto JS */
function promesaLeerArchivoDB(path) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, comidaIngrediente) => {
                    if (error) {
                        console.log("Error de lectura", error)
                        reject(error)
                    } else {
                        resolve(JSON.parse(comidaIngrediente))
                    }
                }
            )
        }
    )
}

/* Recibe un objeto JS, lo convierte a JSON y lo envia al DB */
function promesaEscribirArchivoDB(path, datoActual) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                JSON.stringify(datoActual),
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

/*-*-*-*-*-*-*-*-*-*-* Funciones de gestión de comidas *-*-*-*-*-*-*-*-*-*-*/

/* Muestra el menú de las comidas y los entradas de texto (inputs) */
async function mostrarMenuComida() {
    try {
        const menuComida = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcionMenu',
                message: 'Menú Comida.- Seleccione una opción:',
                choices: ["Mostrar Comidas", "Nueva comida", "Editar Comida", "Eliminar comida", "Volver al menu"]
            }
        ])
        switch (menuComida["opcionMenu"]) { // Acciones de menu de comidss
            case "Mostrar Comidas": // Vista de comidas disponibles
                console.log("|_______ Menú del día ________|")
                const listaComidas = await mostrarArregloComidasDB()
                listaComidas.forEach(comida => console.log(comida))
                console.log("|_____________________________|")
                return mostrarMenuComida()
            case "Nueva comida":
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
            case "Editar Comida":
                const comidas = await mostrarArregloComidasDB()
                const comidaAEditar = await inquirer.prompt([ // Formulario comida a editar
                    {
                        type: 'list',
                        name: 'listaComidas',
                        message: 'Seleccione una comida',
                        choices: comidas
                    },
                    {
                        type: 'list',
                        name: 'campoAEditar',
                        message: 'Seleccione el campo a editar:',
                        choices: ["Nombre", "Descripcion", "NumeroPersonas", "Nacionalidad", "Picante?"]
                    }
                ])
                const idComidaAEditar = parseInt(comidaAEditar["listaComidas"].split("-")[0]) // extrae el id
                switch (comidaAEditar["campoAEditar"]) { // Acciones de campo a editar
                    case "Nombre":
                        const nuevoNombre = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevoNomComida',
                                message: 'Nuevo nombre:'
                            }
                        ])
                        return editarComidaDB(idComidaAEditar, 1, nuevoNombre["nuevoNomComida"])
                    case "Descripcion":
                        const nuevaDesc = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevaDescComida',
                                message: 'Nueva descripción:'
                            }
                        ])
                        return editarComidaDB(idComidaAEditar, 2, nuevaDesc["nuevaDescComida"])
                    default:
                        console.log("Opcion no válida")
                        break
                }
                break
            case "Eliminar comida":
                const comidas_ = await mostrarArregloComidasDB()
                const comidaABorrar = await inquirer.prompt([ // Acción de Borrado
                    {
                        type: 'list',
                        name: 'listaComidas',
                        message: 'Seleccione una comida',
                        choices: comidas_
                    }
                ])
                const idComidaABorrar = parseInt(comidaABorrar["listaComidas"].split("-")[0]) // extrae el id
                return eliminarComidaDB(idComidaABorrar)
            case "Volver al menu":
                return await mostrarMenuPrincipal()
            default:
                break
        }
    } catch (error) {
        console.log('error', error)
    }
}

/* Retorna una arreglo de comidas disponibles*/
async function mostrarArregloComidasDB() {
    try {
        const listaComidas = await promesaLeerArchivoDB(pathComida)
        return listaComidas["comidas"].map(actual => actual["id"] + "- " + actual["nombreComida"])
    } catch (error) {
        console.log('error', error)
    }
}

/* Retorna on objeto comida a partir de su id  */
async function buscarComidaPoridDB(id) { // Devuelve un objeto comida según id
    try {
        const listaComidas = await promesaLeerArchivoDB(pathComida)
        return listaComidas["comidas"]
            .find(comida => comida["id"] = id)
    } catch (error) {
        console.log('error', error)
    }
}

/* Recibe un objeto comida, lo procesa y lo envia al DB*/
async function agregarComidaDB(nuevaComida) {
    try {
        const listaComidas = await promesaLeerArchivoDB(pathComida)
        /* Crea una id para la nueva comida a partir del id de la última comida del archivo */
        const idNuevaComida = listaComidas["comidas"][listaComidas["comidas"].length - 1].id
        nuevaComida.id = idNuevaComida + 1
        listaComidas["comidas"].push(nuevaComida)
        await promesaEscribirArchivoDB(pathComida, listaComidas)
        await mostrarMenuComida()
    } catch (error) {
        console.log('error', error)
    }
}

/* Recibe el id comida, campo a editar y el nuevo dato, los procesa y envia al DB*/
async function editarComidaDB(idComida, campoAEditar, nuevoDatoComida) {
    try {
        console.log("idcomida: " + idComida)
        const comidaAEditar = await buscarComidaPoridDB(idComida)
        const listaComidasActualizadas = await promesaLeerArchivoDB(pathComida)
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
        await promesaEscribirArchivoDB(pathComida, listaComidasActualizadas)
        await mostrarMenuComida()
    } catch (error) {
        console.log('error', error)
    }
}

/* Recibe el id de un objeto comida, lo elimina y envia los cambios al DB */
async function eliminarComidaDB(idComida) {
    try {
        const listaComidasActualizadas = await promesaLeerArchivoDB(pathComida)
        const indiceComida = listaComidasActualizadas["comidas"].findIndex(
            comidaAEliminar => comidaAEliminar["id"] === idComida
        )
        listaComidasActualizadas["comidas"].splice(indiceComida, 1)
        await promesaEscribirArchivoDB(pathComida, listaComidasActualizadas)
        await mostrarMenuComida()
    } catch (error) {
        console.log('error', error)
    }
}

/*-*-*-*-*-*-*-*-*-*-* Funciones de gestión de ingredientes *-*-*-*-*-*-*-*-*-*-*/

/* Muestra el menú de las ingredientes y los entradas de texto (inputs) */
async function mostrarMenuIngredientes() {
    try {
        const menuIngredientes = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcionMenuIng',
                message: 'Menú Ingredientes.- Seleccione una opción:',
                choices: ["Mostrar ingredientes", "Nuevo ingrediente", "Editar ingrediente",
                    "Eliminar ingrediente", "Volver al menu"]
            }
        ])
        switch (menuIngredientes["opcionMenuIng"]) { // Acciones de menu ingredientes
            case "Mostrar ingredientes":
                const verIngredientes = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'opcionVistaIng',
                        message: 'Motrar Ingredientes.- Seleccione una opción:',
                        choices: ["Ver todos", "Por comida"]
                    }
                ])
                switch (verIngredientes["opcionVistaIng"]) {
                    case "Ver todos":
                        console.log("|___ Catálogo ingredientes ____|")
                        const listaIngredientes = await mostrarTodosLosIngredientesDB()
                        listaIngredientes.forEach(ingrediente => console.log(ingrediente))
                        console.log("|______________________________|")
                        return mostrarMenuIngredientes()
                    case "Por comida":
                        const comidas = await mostrarArregloComidasDB()
                        const ingredientesDeComida = await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'listaComidas',
                                message: 'Seleccione una comida:',
                                choices: comidas
                            }
                        ])
                        await desplegarIngredientesPorComida(ingredientesDeComida)
                        console.log("|______________________________|")
                        return mostrarMenuIngredientes()
                }
                break
            case "Nuevo ingrediente":
                const listaComidasActuales = await mostrarArregloComidasDB()
                const comidaParaIngrediente = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaComidas',
                        message: 'Seleccione una comida:',
                        choices: listaComidasActuales
                    }
                ])
                const nuevoIngrediente = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'nombreIngrediente',
                        message: 'Nombre ingrediente:'
                    },
                    {
                        type: 'number',
                        name: 'cantidadIngrediente',
                        message: 'Cantidad:'
                    },
                    {
                        type: 'list',
                        name: 'tipoIngrediente',
                        message: 'Seleccione el tipo:',
                        choices: tipoIngrediente
                    },
                    {
                        type: 'confirm',
                        name: 'refrigeracion',
                        message: 'Necesita refiregeracion?:',
                        default: false
                    }
                ])
                const idComidaAEditar = parseInt(comidaParaIngrediente["listaComidas"].split("-")[0]) // extrae el id
                console.log(idComidaAEditar)
                nuevoIngrediente["idComida"] = idComidaAEditar
                console.log(nuevoIngrediente)
                return await agregarIngredienteDB(nuevoIngrediente)
            case "Editar ingrediente":
                const listaComidasEditables = await mostrarArregloComidasDB()
                const comidaDeIngredienteAEditar = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaComidas',
                        message: 'Seleccione una comida:',
                        choices: listaComidasEditables
                    }
                ])
                const listaIngredientePorComida = await buscarIngredientesPorComida(comidaDeIngredienteAEditar)
                const ingredienteAEditar = await inquirer.prompt([ // Formulario comida a editar
                    {
                        type: 'list',
                        name: 'listaIngredientes',
                        message: 'Seleccione un ingrediente:',
                        choices: listaIngredientePorComida
                    },
                    {
                        type: 'list',
                        name: 'campoAEditar',
                        message: 'Seleccione el campo a editar:',
                        choices: ["Nombre", "Cantidad", "TipoIngrediente", "necesitaRefrigeracion"]
                    }
                ])
                const idIngredienteAEditar = parseInt(ingredienteAEditar["listaIngredientes"].split("-")[0])
                switch (ingredienteAEditar["campoAEditar"]) {
                    case "Nombre":
                        const nuevoNombre = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevoNomIng',
                                message: 'Nuevo nombre:'
                            }
                        ])
                        return editarIngredienteDB(idIngredienteAEditar, 1, nuevoNombre["nuevoNomIng"])
                    case "Cantidad":
                        const nuevaCantidad = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevaCantidad',
                                message: 'Nueva cantidad:'
                            }
                        ])
                        return editarIngredienteDB(idIngredienteAEditar, 2, nuevaCantidad["nuevaCantidad"])
                    case "TipoIngrediente":
                        const nuevoTipo = await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'nuevoTipoIng',
                                message: 'Seleccione el tipo:',
                                choices: tipoIngrediente
                            }
                        ])
                        return editarIngredienteDB(idIngredienteAEditar, 3, nuevoTipo["nuevoTipoIng"])
                    case "necesitaRefrigeracion":
                        const nuevaRef = await inquirer.prompt([
                            {
                                type: 'confirm',
                                name: 'nuevaRef',
                                message: 'Necesita refiregeracion?:',
                                default: false
                            }
                        ])
                        return editarIngredienteDB(idIngredienteAEditar, 4, nuevaRef["nuevaRef"])
                    default:
                        break
                }
                break
            case "Eliminar ingrediente":
                const listaComidasBorrables = await mostrarArregloComidasDB()
                const comidaDeIngredienteABorrar = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaComidas',
                        message: 'Seleccione una comida:',
                        choices: listaComidasBorrables
                    }
                ])
                const listaIngredientePorComida2 = await buscarIngredientesPorComida(comidaDeIngredienteABorrar)
                const ingredienteABorrar = await inquirer.prompt([ // Formulario comida a borrar
                    {
                        type: 'list',
                        name: 'listaIngredientes',
                        message: 'Seleccione un ingrediente:',
                        choices: listaIngredientePorComida2
                    }
                ])
                const idIngredienteABorrar = parseInt(ingredienteABorrar["listaIngredientes"].split("-")[0])
                return eliminarComidaDB(idIngredienteABorrar)
            case "Volver al menu":
                return await mostrarMenuPrincipal()
            default:
                break
        }
    } catch (error) {
        console.log(error)
    }
}

/* Retorna una arreglo de ingredientes disponibles*/
async function mostrarTodosLosIngredientesDB() {
    try {
        const listaIngredientes = await promesaLeerArchivoDB(pathIngredientes)
        return listaIngredientes["ingredientes"].map(actual => actual["idIng"] + "- " + actual["nombreIngrediente"])
    } catch (error) {
        console.log('error', error)
    }
}

/* Retorna un arreglo de ingredientes correspondiente a un objeto comida */
async function buscarIngredientesPorComida(comidaParaIngrediente) {
    const idComidaAMostrar = parseInt(comidaParaIngrediente["listaComidas"].split("-")[0])
    console.log(idComidaAMostrar)
    console.log("Ingredientes para", comidaParaIngrediente["listaComidas"].split("-")[1])
    try {
        const listaIngredientes = await promesaLeerArchivoDB(pathIngredientes)
        return listaIngredientes["ingredientes"]
            .filter(actual => actual["idComida"] === idComidaAMostrar)
            .map(actualIng => actualIng["idIng"] + "- " + actualIng["nombreIngrediente"])
    } catch (error) {
        console.log('error', error)
    }

}

/* Imprime el arreglo de ingredientes correspondiente a un objeto comida */
async function desplegarIngredientesPorComida(comidaParaIngrediente) {
    try {
        const listaIngredientesPorComida = await buscarIngredientesPorComida(comidaParaIngrediente)
        return listaIngredientesPorComida
            .forEach(ingrediente => console.log(ingrediente))
    } catch (error) {
        console.log('error', error)
    }
}

/* Retorna on objeto ingrediente a partir de su id */
async function buscarIngredientePorIdDB(id) {
    try {
        const listaIngredientes = await promesaLeerArchivoDB(pathIngredientes)
        return listaIngredientes["ingredientes"]
            .find(ingrediente => ingrediente["idIng"] = id)
    } catch (error) {
        console.log('error', error)
    }
}

/* Recibe un objeto ingrediente, lo procesa y lo envia al DB*/
async function agregarIngredienteDB(nuevoIngrediente) {
    try {
        const listaIngredientes = await promesaLeerArchivoDB(pathIngredientes)
        /* Crea una id para el nueva ingrediente a partir del id de la última ingrediente del archivo */
        const idNuevoIng = listaIngredientes["ingredientes"][listaIngredientes["ingredientes"].length - 1].idIng
        nuevoIngrediente.idIng = idNuevoIng + 1
        listaIngredientes["ingredientes"].push(nuevoIngrediente)
        await promesaEscribirArchivoDB(pathIngredientes, listaIngredientes)
        await mostrarMenuComida()
    } catch (error) {
        console.log('error', error)
    }
}

/* Recibe el id ingrediente, campo a editar y el nuevo dato, los procesa y envia al DB*/
async function editarIngredienteDB(idIngrediente, campoAEditar, nuevoDatoIngrediente) {
    try {
        const ingredienteAEditar = await buscarIngredientePorIdDB(idIngrediente)
        const listaIngredientesActualizadas = await promesaLeerArchivoDB(pathIngredientes)
        const posicionIngredienteActual = listaIngredientesActualizadas["ingredientes"].findIndex(
            comidaActual => comidaActual["idIng"] === idIngrediente
        )
        /* El cambio se realiza según el campo a editar seleccionado en el menu */
        switch (campoAEditar) {
            case 1: // Cambiar el nombre
                ingredienteAEditar["nombreIngrediente"] = nuevoDatoIngrediente
                break
            case 2: // Cambiar la cantidad
                ingredienteAEditar["cantidadIngrediente"] = nuevoDatoIngrediente
                break
            case 3: // Cambiar el tipo
                ingredienteAEditar["tipoIngrediente"] = nuevoDatoIngrediente
                break
            case 4: // Cambiar si es picante
                ingredienteAEditar["refrigeracion"] = nuevoDatoIngrediente
                break
            default:
                console.log("Opcion no válida")
                break
        }
        /* El nuevo objeto editado reemplaza al anterior en la misma posición */
        listaIngredientesActualizadas["ingredientes"].splice(posicionIngredienteActual, 1, ingredienteAEditar)
        await promesaEscribirArchivoDB(pathIngredientes, listaIngredientesActualizadas)
        await mostrarMenuIngredientes()
    } catch (error) {
        console.log('error', error)
    }
}

/* Recibe el id de un objeto ingrediente, lo elimina y envia los cambios al DB */
async function eliminarIngredienteDB(idIngrediente) {
    try {
        const listaIngredientesActualizados = await promesaLeerArchivoDB(pathIngredientes)
        const indiceIngrediente = listaIngredientesActualizados["ingredientes"].findIndex(
            ingredienteAEliminar => ingredienteAEliminar["idIng"] === idIngrediente
        )
        listaIngredientesActualizados["comidas"].splice(indiceIngrediente, 1)
        await promesaEscribirArchivoDB(pathComida, listaIngredientesActualizados)
        await mostrarMenuIngredientes()
    } catch (error) {
        console.log('error', error)
    }
}

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*  Ejecución de programa *-*-*-*-*-*-*-*-*-*-*-*-*-*/
async function main() {
    try {
        await mostrarMenuPrincipal()
    } catch (error) {
        console.log('error', error)
    }
}

main().then(() => console.log("by Cristian Defaz, buenas tardes :D"))




