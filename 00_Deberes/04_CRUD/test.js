const data = ["Criss", "Jessy", "Mary", "kerly"]
console.log(data)
data.splice(2, 1, "Antonio", "Max")
console.log(data)
data.splice(2, 1)
console.log(data)

let obj = {
    "comidas": [
        {
            "nombreComida": "Caldo de 31",
            "cantidadCom": "5",
            "id": 1
        },
        {
            "nombreComida": "Encebollado",
            "cantidadCom": 4,
            "id": 2
        },
        {
            "nombreComida": "Papas con cuero",
            "cantidadCom": 3,
            "id": 3
        },
        {
            "nombreComida": "Humitas",
            "cantidadCom": 3,
            "id": 3
        }

    ]
}

nuevo = {
    "nombreComida": "Cangrejos",
    "cantidadCom": 3,
    "id": 4
}

console.log(obj)
obj["comidas"].splice(1, 1)
console.log(obj)
obj["comidas"].splice(1, 1, nuevo)
console.log(obj)