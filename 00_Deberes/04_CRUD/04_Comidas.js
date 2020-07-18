const fs = require('fs')
const inquirer = require('inquirer')
const pathComida = './04_Comidas_DB.json' // DB Comida
const tipoComida = ["Plato fuerte", "Sopa", "Postre", "Bebida", "Comida rapida"]
const pathIngredientes = './04_Ingredientes_DB.json' // DB Ingredientes
const tipoIngrediente = ["Carne/Embutido", "Lacteo", "Cereal/Harina/Grano", "Aceite/grasa"
    , "Sales/azucares", "Fruta", "Pescado/Marisco", "Legumbre/Verdura"]

/* Muestra el menú del sistema con 2 opciones generales */
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

/* Lee el archivo JSON DB y retorna un objeto JS */
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

/* Recibe un objeto JS, lo convierte a JSON DB */
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
                const listaComidas = await mostrarTodasLasComidas()
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
                        type: 'list',
                        name: 'tipoComida',
                        message: 'Seleccione un tipo:',
                        choices: tipoComida
                    },
                    {
                        type: 'input',
                        name: 'nacionalidad',
                        message: 'Nacionalidad:'
                    },
                    {
                        type: 'number',
                        name: 'numeroPersonas',
                        message: 'Cantidad de personas:'
                    },
                    {
                        type: 'confirm',
                        name: 'picante',
                        message: 'Es picante?:',
                        default: true
                    }
                ])
                return await agregarComidaDB(nuevaComida)
            case "Editar Comida":
                const listaComidasEditables = await mostrarTodasLasComidas()
                const comidaAEditar = await inquirer.prompt([ // Formulario comida a editar
                    {
                        type: 'list',
                        name: 'listaComidas',
                        message: 'Seleccione una comida',
                        choices: listaComidasEditables
                    },
                    {
                        type: 'list',
                        name: 'campoAEditar',
                        message: 'Seleccione el campo a editar:',
                        choices: ["Nombre", "Tipo de Comida", "NumeroPersonas", "Nacionalidad", "Picante?"]
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
                    case "Tipo de Comida":
                        const nuevoTipoCom = await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'nuevoTipoComida',
                                message: 'Seleccione un tipo:',
                                choices: tipoComida
                            }
                        ])
                        return editarComidaDB(idComidaAEditar, 2, nuevoTipoCom["nuevoTipoComida"])
                    case "NumeroPersonas":
                        const nuevoNumPer = await inquirer.prompt([
                            {
                                type: 'number',
                                name: 'nuevoNumPerComida',
                                message: 'Numero de personas:'
                            }
                        ])
                        return editarComidaDB(idComidaAEditar, 3, nuevoNumPer["nuevoNumPerComida"])
                    case "Nacionalidad":
                        const nuevaNacionalidad = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevaNacComida',
                                message: 'Nacionalidad:'
                            }
                        ])
                        return editarComidaDB(idComidaAEditar, 4, nuevaNacionalidad["nuevaNacComida"])
                    case "Picante?":
                        const esPicante = await inquirer.prompt([
                            {
                                type: 'confirm',
                                name: 'esPicanteComida',
                                message: 'Es picante?:',
                                default: false
                            }
                        ])
                        return editarComidaDB(idComidaAEditar, 5, esPicante["esPicanteComida"])
                    default:
                        break
                }
                break
            case "Eliminar comida":
                const comidasBorrables = await mostrarTodasLasComidas()
                const comidaABorrar = await inquirer.prompt([ // Acción de Borrado
                    {
                        type: 'list',
                        name: 'listaComidas',
                        message: 'Seleccione una comida',
                        choices: comidasBorrables
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

/* Retorna una arreglo de todas las comidas disponibles*/
async function mostrarTodasLasComidas() {
    try {
        const listaComidas = await promesaLeerArchivoDB(pathComida)
        return listaComidas["comidas"]
            .map(actual => actual["id"] + "- " + actual["nombreComida"]).reverse()
    } catch (error) {
        console.log('error', error)
    }
}

/* Retorna on objeto comida a partir de su id  */
async function buscarComidaPoridDB(id) { // Devuelve un objeto comida según id
    try {
        const listaComidas = await promesaLeerArchivoDB(pathComida)
        return listaComidas["comidas"]
            .find(comida => comida["id"] === id)
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
        await mostrarMenuIngredientes()
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
                comidaAEditar["tipoComida"] = nuevoDatoComida
                break
            case 3: // Cambiar la nacionalidad
                comidaAEditar["nacionalidad"] = nuevoDatoComida
                break
            case 4: // Cambiar num de personas
                comidaAEditar["numeroPersonas"] = nuevoDatoComida
                break
            case 5: // Cambiar si es picante
                comidaAEditar["picante"] = nuevoDatoComida
                break
            default:
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
        /* Eliminacion de ingredientes en cascada, filtrando los no tengan el idComida */
        const listaIngredientes = await promesaLeerArchivoDB(pathIngredientes)
        listaIngredientes["ingredientes"] = listaIngredientes["ingredientes"]
            .filter(ing => ing["idComida"] !== idComida)
         await promesaEscribirArchivoDB(pathIngredientes, listaIngredientes)

        /* Finalmente elimina la comida */
        const listaComidasActualizadas = await promesaLeerArchivoDB(pathComida)
        const indiceComida = listaComidasActualizadas["comidas"]
            .findIndex(comidaAEliminar => comidaAEliminar["id"] === idComida)
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
                        message: 'Mostrar Ingredientes.- Seleccione una opción:',
                        choices: ["Ver todos", "Por comida"]
                    }
                ])
                switch (verIngredientes["opcionVistaIng"]) {
                    case "Ver todos":
                        await mostrarTodosLosIngredientesDB()
                        console.log("|______________________________|")
                        return mostrarMenuIngredientes()
                    case "Por comida":
                        const comidas = await mostrarTodasLasComidas()
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
                const listaComidasActuales = await mostrarTodasLasComidas()
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
                        message: 'Seleccione un tipo:',
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
                nuevoIngrediente["idComida"] = idComidaAEditar
                return await agregarIngredienteDB(nuevoIngrediente)
            case "Editar ingrediente":
                const listaComidasEditables = await mostrarTodasLasComidas()
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
                        choices: ["Nombre", "Cantidad", "TipoIngrediente", "necesitaRefrigeracion?"]
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
                                name: 'nuevaCantIng',
                                message: 'Nueva cantidad:'
                            }
                        ])
                        return editarIngredienteDB(idIngredienteAEditar, 2, nuevaCantidad["nuevaCantIng"])
                    case "TipoIngrediente":
                        const nuevoTipo = await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'nuevoTipoIng',
                                message: 'Seleccione un tipo:',
                                choices: tipoIngrediente
                            }
                        ])
                        return editarIngredienteDB(idIngredienteAEditar, 3, nuevoTipo["nuevoTipoIng"])
                    case "necesitaRefrigeracion?":
                        const nuevaRef = await inquirer.prompt([
                            {
                                type: 'confirm',
                                name: 'necesitaRef',
                                message: 'Necesita refiregeracion?:',
                                default: false
                            }
                        ])
                        return editarIngredienteDB(idIngredienteAEditar, 4, nuevaRef["necesitaRef"])
                    default:
                        break
                }
                break
            case "Eliminar ingrediente":
                const listaComidasBorrables = await mostrarTodasLasComidas()
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
                return eliminarIngredienteDB(idIngredienteABorrar)
            case "Volver al menu":
                return await mostrarMenuPrincipal()
            default:
                break
        }
    } catch (error) {
        console.log(error)
    }
}

/* Retorna una arreglo de todos los ingredientes disponibles */
async function mostrarTodosLosIngredientesDB() {
    try {
        console.log("|___ Catálogo ingredientes ____|")
        const listaIngredientes = await promesaLeerArchivoDB(pathIngredientes)
        return listaIngredientes["ingredientes"]
            .map(actual => actual["idIng"] + "- " + actual["nombreIngrediente"]).reverse()
            .forEach(ingredientes => console.log(ingredientes))
    } catch (error) {
        console.log('error', error)
    }
}

/* Retorna un arreglo de ingredientes a parit de un objeto "id-nombreIngrediente" */
async function buscarIngredientesPorComida(comidaParaIngrediente) {
    const idComidaAMostrar = parseInt(comidaParaIngrediente["listaComidas"].split("-")[0]) // id
    console.log("Ingredientes de:", comidaParaIngrediente["listaComidas"].split("-")[1]) // nombre
    try {
        const listaIngredientes = await promesaLeerArchivoDB(pathIngredientes)
        return listaIngredientes["ingredientes"]
            .filter(actual => actual["idComida"] === idComidaAMostrar)
            .map(actualIng => actualIng["idIng"] + "- " + actualIng["nombreIngrediente"]).reverse()
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
async function buscarIngredientePorIdDB(idIngrediente) {
    try {
        const listaIngredientes = await promesaLeerArchivoDB(pathIngredientes)
        return listaIngredientes["ingredientes"]
            .find(ingrediente => ingrediente["idIng"] === idIngrediente)
    } catch (error) {
        console.log('error', error)
    }
}

/* Recibe un objeto ingrediente, lo procesa y lo envia al DB*/
async function agregarIngredienteDB(nuevoIngrediente) {
    try {
        const listaIngredientes = await promesaLeerArchivoDB(pathIngredientes)
        /* Crea una id para el nueva ingrediente a partir del id del última ingrediente del archivo */
        const idNuevoIng = listaIngredientes["ingredientes"][listaIngredientes["ingredientes"].length - 1].idIng
        nuevoIngrediente.idIng = idNuevoIng + 1
        listaIngredientes["ingredientes"].push(nuevoIngrediente)
        await promesaEscribirArchivoDB(pathIngredientes, listaIngredientes)
        await mostrarMenuIngredientes()
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
            ingredienteActul => ingredienteActul["idIng"] === idIngrediente
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
        const indiceIngrediente = listaIngredientesActualizados["ingredientes"]
            .findIndex(ingredienteAEliminar => ingredienteAEliminar["idIng"] === idIngrediente)
        listaIngredientesActualizados["ingredientes"].splice(indiceIngrediente, 1)
        await promesaEscribirArchivoDB(pathIngredientes, listaIngredientesActualizados)
        await mostrarMenuIngredientes()
    } catch (error) {
        console.log('error', error)
    }
}

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*  Ejecución de programa *-*-*-*-*-*-*-*-*-*-*-*-*-*/
async function main() {
    try {
        await mostrarMenuPrincipal()
        // await eliminarComidaDB(2)
    } catch (error) {
        console.log('error', error)
    }
}

main().then(() => console.log("by Cristian Defaz, buenas tardes :D"))

