/**
 * Resenia.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'Resenia',

  attributes: {
    calificacion: {type: 'number'},
    comentario: {type: 'string'},

    // Relacion 1-1 Resenia < Anunciante
    idAnunciante: {
      model: 'Anunciante',
      columnType: 'tinyint',
      required: true,
      unique: true
    },

    // Relación 1-1 Resenia < Cliente
    idCliente: {
      model: 'Cliente',
      columnType: 'tinyint',
      required: true,
      unique: true
    }

  },

};

