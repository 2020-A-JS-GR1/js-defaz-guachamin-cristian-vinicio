

const promesaLeerArchivo = new Promise()
const promesaEscribirArchivo = new Promise()

// ASYNC - AWAIT -> Se usan solamente dentro de una función
// Si usamos AWAIT -> Siempre utilizar un bloque try - catch
async function ejercicio() {
    console.log("1")
    try {
        const contenidoArchivActual = await promesaLeerArchivo()
        await promesaEscribirArchivo()
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido)

    } catch (error) {
        console.log(error)

    }

}