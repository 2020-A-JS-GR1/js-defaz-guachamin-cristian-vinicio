const arregloUno = [1, 2, 3, 4, 5]
const arregloDos = [6, 7, 8, 9, 10]
const superArreglo = [
    ...arregloUno,
    ...arregloDos
]


superArreglo[0] = 100
console.log('superArreglo', superArreglo)

let data = {
    "comidas": [
    {
        "nombreComida": "Empanadas",
        "cantidadCom": 4,
        "id": 1
    },
    {
        "nombreComida": "Ceviche",
        "cantidadCom": 3,
        "id": 2
    }
]
}

data["comidas"][1]["nombreComida"] = "Ceviche"
console.log(data)

