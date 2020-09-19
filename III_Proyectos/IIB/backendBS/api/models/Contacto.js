/**
 * Contacto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'Contacto',

  attributes: {
    direccion: {type: 'string'},
    ciudad: {type: 'string'},
    celular: {type: 'string', maxLength: 15},
    convencional: {type: 'string',  maxLength: 15},
    urlFacebook: {type: 'string'},
    organizacion: {type: 'string'},

    // Relacion 1-1 Contacto > Anunciante
    anunciante: {
      collection: 'Anunciante',
      via: 'idContacto'
    }

  },

};

