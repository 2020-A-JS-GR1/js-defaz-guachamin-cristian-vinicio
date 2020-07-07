
const promesaLeerArchivo = () => {
    return new Promise(
        (res, rej) => {
            res("Contenido leeer archivo")
        }
    )
}

const promesaEscribirArchivo = () => {
    return new Promise(
        (res, rej) => {
            // res("Contenido escribir archivo")
            rej("Error: :(")
        }
    )
}

// ASYNC - AWAIT -> Se usan solamente dentro de una función
// Si usamos AWAIT -> Siempre utilizar un bloque try - catch
async function ejercicio() {
    console.log("1")
    try {
        console.log("2")
        const contenidoArchivActual = await promesaLeerArchivo()
        console.log(contenidoArchivActual)
        console.log("3")
        await promesaEscribirArchivo()
        console.log("4")
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido)
        console.log("5")
    } catch (error) {
        console.log(error)
    }
    console.log("6")
    console.log("7")
}

ejercicio()
// const respuestaEjercicio = ejercicio()
// console.log("respuesta ejercicio ", respuestaEjercicio)
// console.log("Promesa leer archivo ", promesaLeerArchivo())
// console.log("Promesa escribir archivo ", promesaEscribirArchivo())


