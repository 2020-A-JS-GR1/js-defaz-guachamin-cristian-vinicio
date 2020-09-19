/**
 * Solicitud.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'Solicitud',

  attributes: {
    fechaSolicitud: {type: 'string'},

    // Relacion n-0 Solicitud < Cliente
    idCliente: {
      model: 'Cliente',
      columnType: 'tinyint',
      required: true
    },

    // Relacion n-1 Solicitud < Anuncio
    idAnuncio: {
      model: 'Anuncio',
      columnType: 'tinyint',
      required: true
    }

  },

};

