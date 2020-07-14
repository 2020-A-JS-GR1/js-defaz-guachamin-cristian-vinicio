var nombre = "Criss";
// nombre = 1
nombre = "Vinicio";
// Duck typing -> si actua o se ve como un pato, es un pato
var edad = 31;
var casado = false;
var fecha = new Date();
var sueldo;
sueldo = 12.4;
// sueldo = "12.23"  -> error
var marihuana = 2; // Mala práctica para que sea número, boolean, funciion, etc. como en JS
marihuana = '2';
marihuana = true;
marihuana = function () { return '2'; };
// Se puede poner varios valores a una variable
// Util para recibir varios tipos de datos desde una DB
// o una funcion que devuelve un objeto o un error
var edadMultiple = 2;
edadMultiple = '2';
edadMultiple = 22222;
edadMultiple = 'dos';
