const arreglo = [
    {
        id: 1,
        nombre: 'Criss',
        nota: 12
    },
    {
        id: 2,
        nombre: 'Paulina',
        nota: 15
    },
    {
        id: 3,
        nombre: 'Gisel',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Darwin',
        nota: 13.7
    },
    {
        id: 5,
        nombre: 'Danny',
        nota: 20
    },
    {
        id: 6,
        nombre: 'Raul',
        nota: 14
    },
    {
        id: 7,
        nombre: 'Viviana',
        nota: 15
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 10
    },
    {
        id: 9,
        nombre: 'Jordana',
        nota: 19.5
    },
    {
        id: 10,
        nombre: 'Mia',
        nota: 18
    }
];

/*
Utilizando el arreglo de la clase vamos a realizar las siguientes operaciones:
-> Por cada vocal dentro de la palabra del estudiante 0.1 decimas
-> Por cada consonante dentro de la palabra del estudiante 0.05 decimas
Filtren cuales personas pasaron
 */

console.log("Notas inciales:", arreglo)

// Mapeo de notas
const vocales = ["a", "e", "i", "o", "u"]
const mapeoEstudiantes = arreglo
    .map(
        (estudianteActual) => {
            let notaFinal = estudianteActual.nota
            estudianteActual.nombre.trim().toLowerCase().split("") // Crea un arreglo de letras con cada nombre
                .forEach( // recorre cada letra del arreglo de letras
                    (letraNombreActual) => {
                        if (vocales.includes(letraNombreActual)) {
                            notaFinal += 0.1 // vocal
                        } else {
                            notaFinal += 0.05 // consonante
                        }
                    }
                )
            let incremento = (notaFinal - estudianteActual.nota).toFixed(2)
            if (notaFinal >= 20) { // Si la nota es mayor/igual a 20, no hay incremento
                return {
                    id: estudianteActual.id,
                    nombre: estudianteActual.nombre,
                    // nota: estudianteActual.nota.toFixed(2),
                    nota: '20.00',
                    incremento: incremento
                }
            } else {
                return {
                    id: estudianteActual.id,
                    nombre: estudianteActual.nombre,
                    nota: notaFinal.toFixed(2), // toFixed(2) para 2 decimales
                    incremento: incremento
                }
            }

        }
    )
console.log('Notas finales:', mapeoEstudiantes)

const estudiantesAprobados = mapeoEstudiantes.filter( // Filtrado
    (aprobadoActual) => {
        return aprobadoActual.nota >= 14
    }
)
console.log('Lista de estudiantes aprobados (>14):', estudiantesAprobados)

// Arreglo inicial limpio, sin modificaciones
console.log("Arreglo incial:", arreglo)

