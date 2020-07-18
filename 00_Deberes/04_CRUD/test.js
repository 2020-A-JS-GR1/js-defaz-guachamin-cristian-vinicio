/* Archivo solo para probar :V */
const inquirer = require('inquirer')
/*
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
*/

/* Probando inquirer */
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

const choi = obj["comidas"].map(
    actual=>actual["nombreComida"]
)
console.log(choi)
async function menu(choi) {
    try {

        const menu = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcionMenu',
                message: 'Escoja una opcion',
                choices: choi
            }
        ])
        console.log(typeof menu["opcionMenu"])
        console.log(menu["opcionMenu"])
    } catch (error) {
        console.log(error)
    }

}

//menu(choi)


// menu().then(
//     opcion => console.log(opcion)
// )

inquirer
    .prompt([
        {
            type: 'confirm',
            name: 'reptile',
            message: 'Which is better?',
            default: true
        },
    ])
    .then(answers => {
        console.info('Answer:', answers.reptile);
        console.log(typeof answers.reptile)
    });


