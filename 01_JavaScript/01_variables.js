
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

// Accesos al objeto:
console.log(criss.nombre) // Cristiano
console.log(criss.apellido)// 'Defaz'

const arregloDeNumeros = [] // object
// -> JS no hace ditinción entre tipos de objetos
console.log(criss)
console.log(arregloDeNumeros)
