class Persona {
    constructor(nombreParametro, apellidoParametro) {
        this.nombreYApellido = "";
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + ' ' + this.apellido;
    }
    mostrarMNombreApellido() {
        return this.nombreYApellido;
    }
}
Persona.nombreRefrencia = "Humano";
class Usuario extends Persona {
    constructor(nombreParametro, apellidoParametro, 
    // Definir parametros directamente en el constructor como public
    // para evitar la logica de la programación POO
    cedula, estadoCivil) {
        super(nombreParametro, apellidoParametro);
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
    }
}
const criss = new Usuario('Criss', 'Defaz', '1723464465', 'soltero');
console.log(criss.nombre);
console.log(criss.apellido);
console.log(criss.cedula);
console.log(criss.estadoCivil);
console.log(criss);


