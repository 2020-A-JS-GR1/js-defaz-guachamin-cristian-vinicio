/**
 * Servicio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'Servicio',

  attributes: {
    descripcionServicio: {type: 'string'},
    urlIcono: {type: 'string'},

    // Relacion 1-n Servicio > Anuncios
    anuncios: {
      collection: 'Anuncio',
      via: 'idServicio'
    }

  },

};

