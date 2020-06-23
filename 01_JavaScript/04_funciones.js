
function soloNumeros(a, b, c){
    return a+ b+ c
}
function soloLetras(a, b, c){
    return a+ b+ c
}

soloNumeros('v', true, [1,2,3])
soloNumeros()
soloLetras(1,2,3,4,5,6)

// Funciones nombradas
function funcionNombrada() {}
funcionNombrada()

const funcionNombradaDos = function () {} // funciones anonimas
var funcionNombradaTres = function () {} // funciones sin nombre
let funcionNombradaCuatro = function () {} // funciones anonimas

funcionNombradaDos()
funcionNombradaTres()
funcionNombradaCuatro()
// opcional() NO EXISTO

const funcionNombradaCinco = () => {}   // Fat arrow functions / flecha gorda
const funcionNombradaSeis = (x) => {    // Fat arrow functions
    return x + 1
}
const funcionNombradaSiete = (x) => x + 1   // Fat arrow functions
                                            // Funciones de una sola linea
                                            // Se puede omitr llaves y return
const funcionNombradOcho = x => x +1        // Cuando tengo un solo parámetro
                                            // Omito los paréntesis
const funcionNombradaNueve = (x,y,z) => x+y+z   // tengo un solo parámetro
                                                // Omito los paréntesis

// Parámetros infinitos -> van siempre al final de todos los parámetros
// Aplica para funciones nombradas, anónimas, fat arrow, etc.
function sumarNumeros(numeroInicial, // 1
                                    ...otrosNumeros){ // Parámetros infinitos [2,3,4,5,....]
    return numeroInicial + otrosNumeros.reduce((a,v)=>a+v,0)
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10)


