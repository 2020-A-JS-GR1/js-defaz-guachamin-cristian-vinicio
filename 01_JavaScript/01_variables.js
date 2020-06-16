
// Tipos de variables
// Mutables e inmutables

/********** Variables mutables -> van a cambiar **********/
var numeroUno =1
let numeroDos = 2

// Se puede reasignar valores del mismo tipo
numeroUno = 5
numeroDos = 8

// Y también de otro tipo
numeroUno = false
numeroDos = true

/********** Variables inmutables -> no cambian **********/
const configuracionArchivos = "PDF"
// configuracionArchivos = "XML" -> No se puede reasignar

// Tipos de variables:
const numero = 1 //number
const sueldo = 1.2 // number
const texto = "Criss" // string
const booleano = false // boolean
const hijos = null // object
const zapatos = undefined //undefined
const apellido = 'Defaz' // Pueden usarse comillas simples o dobles
// Es tipado, pero si existen tipos de variables.

console.log(typeof numero)
console.log(typeof sueldo)
console.log(typeof texto)
console.log(typeof booleano)
console.log(typeof hijos)
console.log(typeof zapatos)
console.log(typeof apellido)
//En javaScript existe 5 tipos de datos.

//NaN:
console.log(Number("asd"))
console.log(typeof Number("asd"))

// Coparaciones Falsy-Truty
if(true == true){
    console.log("Es verdadero")
}else{
    console.log("Es falso")
}

if(true == false){
    console.log("Es verdadero");
}else{
    console.log("Es Falso"); //!
}

// Lo siguente devuelve falso.
if(""){ // Falsy cuando hay una cadena de texto vacia
    console.log("Es verdadero")
}else{
    console.log("Es Falsy")
}

// Lo siguente devuelve verdadero.
if("Criss"){
    console.log("Es Truty")
}else{
    console.log("Es Falso")
}

if(-1){
    console.log("Es Truty")
}else{
    console.log("Es Falso")
}

if(0){ // 0 en JavaScript es falso
    console.log("Es Truty")
}else{
    console.log("Es Falso")
}

if(1){
    console.log("Es Truty")
}else{
    console.log("Es Falso")
}

// Null - undefined
if(null){
    console.log("Es Truty")
}else{
    console.log("Es Falso") // Falsy
}

if(undefined){
    console.log("Es Truty")
}else{
    console.log("Es Falso") // Falsy
}

 // Orden de importancia para declarar variables
// 1) const
// 2) let
// 3) X -> "var"

// Objetos Js (JSON) - Arreglos
const criss = {
    nombre: "Cristiano", // Sintaxis: llave: valor,
    "apellido": 'Defaz',
    edad:31,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa:{
        color:'gris',
        talla: '40'
    },
    mascotas: ['max', 'kiko', 'toto'],
} // object (pueden estar llens de algo o vacío)

// Accesos al objeto: /*********===== Clase 5 =====**********/
console.log(criss.nombre) // Cristiano
console.log(criss.apellido)// 'Defaz'
// Otra sintaxis:
criss["nombre"] // Cristiano
console.log(criss)
criss.nombre = "Vinicio"
console.log(criss)
criss["nombre"] = "Cristiano" // Cristiano
// Se puede reasignar a los propiedades del objeto, aún si es inmutable

// Aumentar atributos
criss.sueldo // -> No existe -> NullPonterException en otros lenguajes
console.log(criss.sueldo) // -> Retorna undefined
criss.sueldo = 1.2 // Agrega
console.log(criss.sueldo) // 1.2
criss["gastos"] = 0.8
console.log(criss.gastos) // 0.8
criss.nombre = undefined // Setear a undefined para "eliminar" una variable dentro de un objeto JS
delete criss.nombre // Elimina la llave "nombre" definitivamente
console.log(criss)

// La clase Object ->
console.log(Object.keys(criss)) // retorna un arreglo con las llaves
console.log(Object.values(criss)) // retorna un arreglo con los valores de llaves

// const arregloDeNumeros = [] // object
// // -> JS no hace ditinción entre tipos de objetos
// console.log(criss)
// console.log(arregloDeNumeros)

// Referencias a los valores (Valor y referencia)
// Valor -> Si ambas tienen el mismo valor
// Lista de variables por valor en JS
// number
// string
// boolean
// undefined
let edadCriss = 31
let edadVin = edadCriss
console.log(edadCriss) // 31 -> Por valor
console.log(edadVin) // 31
edadCriss = edadCriss + 1
console.log(edadCriss) // 32
console.log(edadVin) // 31
// -> Variables de tipo numero son variables por valor,
// aunque le igualo a otro valor numerico, no hace referencia a esa variable

// // Lista de variables por referencia en JS ( Se apunta al mismo espacio de memoria siempre)
// let rafael = {
//     nombre: "Rafael"
// }
// let lenin = rafael
// console.log(rafael)
// console.log(lenin)
//
// lenin.nombre = "Lenin"
// console.log(rafael)
// console.log(lenin) // -> Ambos cambian
//
// delete rafael.nombre
// console.log(rafael)
// console.log(lenin) // -> Se elimina 'nombre' de ambos

// -> Para evitar este lio, necesitamos clonar el objeto sin referenciarlo
let rafael = {
    nombre: "Rafael"
}

let lenin = Object.assign({},rafael) // arreglo clonado
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);
