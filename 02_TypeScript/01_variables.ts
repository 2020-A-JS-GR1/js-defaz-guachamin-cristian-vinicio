let nombre: string = "Criss"
// nombre = 1
nombre = "Vinicio"
// Duck typing -> si actua o se ve como un pato, es un pato
let edad: number = 31
let casado: boolean = false
let fecha: Date = new Date()
let sueldo: number
sueldo = 12.4
// sueldo = "12.23"  -> error

let marihuana: any = 2 // Mala práctica para que sea número, boolean, funciion, etc. como en JS
marihuana = '2'
marihuana = true
marihuana = () => '2'

// Se puede poner varios valores a una variable
// Util para recibir varios tipos de datos desde una DB
// o una funcion que devuelve un objeto o un error
let edadMultiple: number | string = 2
edadMultiple = '2'
edadMultiple = 22222
edadMultiple = 'dos'



