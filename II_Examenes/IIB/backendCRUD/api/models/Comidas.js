/**
 * Comidas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', // nombre conexión
  tableName: 'Comidas', // nombre tabla

  attributes: {
    nombreComida:{
      type: 'string',
      required: true,
      columnName: 'NombreComida',
    },
    tipoComida: {
      type: 'string',
      required: true,
      isIn: ["Plato fuerte", "Sopa", "Postre", "Bebida", "Comida rapida"],
      columnName: 'TipoComida',
    },
    nacionalidad: {
      type: 'string',
      required: true,
      columnName: 'Nacionalidad',
    },
    numeroPersonas: {
      type: 'number',
      required: true,
      columnName: 'NumeroPersonas',
    },
    picante: {
      type: 'string',
      required: true,
      maxLength: 2,
      isIn: ['Si', 'No'],
      columnName: 'Picante',
    },

    ingredientes: {
      collection: 'Ingredientes',
      via: 'idComida'
    }

  },

};

