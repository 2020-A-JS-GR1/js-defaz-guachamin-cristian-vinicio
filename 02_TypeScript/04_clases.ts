class Persona {
    public nombre: string
    public apellido: string
    static nombreRefrencia: string = "Humano"
    protected nombreYApellido: string = ""

    constructor(
        nombreParametro: string,
        apellidoParametro: string
    ) {
        this.nombre = nombreParametro
        this.apellido = apellidoParametro
        this.nombreYApellido = this.nombre + ' ' + this.apellido
    }

    private mostrarMNombreApellido(): string{
        return this.nombreYApellido
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        // Definir parametros directamente en el constructor como public
        // para evitar la logica de la programación POO
        public cedula:string,
        public estadoCivil: string
    ) {
        super(nombreParametro, apellidoParametro)
    }
}
const criss = new Usuario(
    'Criss',
    'Defaz',
    '1723464465',
    'soltero'
)

console.log(criss.nombre)
console.log(criss.apellido)
console.log(criss.cedula)
console.log(criss.estadoCivil)
console.log(criss)

