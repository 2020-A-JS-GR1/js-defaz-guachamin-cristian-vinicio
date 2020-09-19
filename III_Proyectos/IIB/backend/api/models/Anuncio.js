/**
 * Anuncio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'Anuncio',

  attributes: {
    fechaAnuncio: {type: 'string'},
    descripcionAnuncio: {type: 'string'},
    costo: {type: 'number', columnType: 'float'},
    estadoAnuncio: {
      type: 'string',
      isIn: ['A', 'I'],
      defaultsTo: 'A'
    },

    // Relacion 1-1 Anuncio < Anunciante
    idAnunciante: {
      model: 'Anunciante',
      unique: true, // Un solo anunciante por anuncio
      required: true
    },

    // Relacion 1-1 Anuncio < Servicio
    idServicio: {
      model: 'Servicio',
      unique: true, // Un solo servicio por anuncio
      required: true
    },

    // Relacion n-0 Anuncio > Solicitud
    solicitudes: {
      collection: 'Solicitud',
      via: 'idAnuncio'
    }

  },

};

