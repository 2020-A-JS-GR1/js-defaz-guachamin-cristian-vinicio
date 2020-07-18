// TS se trasnpila a JS, las clases existen en JS pero ocupan memoria
// Las interfaces en TS se pueden utilizar en clases sin ocupar memoria
var _this = this;
var criss = {
    nombre: 'Criss',
    apellido: 'Defaz',
    casado: 0,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return _this.sueldo + (_this.sueldo * (impuesto / 100));
    },
    mostrarEstado: function () {
        switch (_this.estado) {
            case "AC":
                return "AP";
            case "IN":
                return "AF";
            case "BN":
                return "AT";
        }
    }
}; // Si no colocamos todos los datos definidos, marca un error
console.log(criss);
// Las interfaces pueden ser utilizadas en clases
// para no desperdiciar memoria en representar un tipo de dato
