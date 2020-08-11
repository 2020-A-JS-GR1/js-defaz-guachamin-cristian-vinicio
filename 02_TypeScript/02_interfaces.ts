
// TS se trasnpila a JS, las clases existen en JS pero ocupan memoria
// Las interfaces en TS se pueden utilizar en clases sin ocupar memoria

interface Usuario {
    nombre: string
    apellido: string
    edad?: number // opcional
    sueldo?: number // opcional
    casado: boolean | 0 | 1 // boolean o 0-1
    estado: 'AC' | 'IN' | 'BN' // datos quemados
    imprimirUsuario: (mensaje: string) => string | 'BN' // funcion
    // Implementar funciones:
    // parametro numero impuesto, sueldo + sueldo * impuesto
    calcularImpuesto: (impuesto: number) => number
    // funcion que no reciba parametros, que devuelva 'AP', 'AF', 'AT'
    mostrarEstado: () => 'AP' | 'AF' | 'AT'
}

const criss: Usuario = {
    nombre: 'Criss',
    apellido: 'Defaz',
    casado: 0,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: '+ mensaje
    },
    calcularImpuesto: (impuesto) =>{ // recibe un entero
        return this.sueldo + (this.sueldo * (impuesto/100))
    },
    mostrarEstado: () => {
        switch (this.estado) {
            case "AC":
                return "AP"
            case "IN":
                return "AF"
            case "BN":
                return "AT"
        }
    }
} // Si no colocamos todos los datos definidos, marca un error

console.log(criss)
// Las interfaces pueden ser utilizadas en clases
// para no desperdiciar memoria en representar un tipo de dato


