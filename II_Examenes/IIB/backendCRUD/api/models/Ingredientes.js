/**
 * Ingredientes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', // nombre conexión
  tableName: 'Ingredientes', // nombre tabla

  attributes: {
    nombreIngrediente:{
      type: 'string',
      required: true,
      columnName: 'NombreIngrediente',
    },
    tipoIngrediente: {
      type: 'string',
      required: true,
      isIn: ["Carne/Embutido", "Lacteo", "Cereal/Harina/Grano", "Aceite/grasa"
        , "Sales/azucares", "Fruta", "Pescado/Marisco", "Legumbre/Verdura"],
      columnName: 'TipoIngrediente',
    },
    cantidadIngrediente: {
      type: 'number',
      required: true,
      columnName: 'CantidadIngrediente',
    },
    refrigeracion: {
      type: 'string',
      required: true,
      maxLength: 3,
      isIn: ['Si', 'No'],
      columnName: 'Refrigeracion',
    },

    idComida: {
      model: 'Comidas',
      required: true
    }

  },

};

