/**
 * Anunciante.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'Anunciante',

  attributes: {
    reputacion: {type: 'number', columnType: 'tinyint'},
    ocupacion: {type: 'string'},
    experiencia: {type: 'number', columnType: 'tinyint'},

    // Relacion 1-1 Anunciante < Usuario
    idUsuario: {
      model: 'Usuario',
      columnType: 'tinyint',
      unique: true, // Un solo Usuario por anunciante
      required: true
    },

    // Relacion 1-1 Anunciante < Contacto
    idContacto: {
      model: 'Contacto',
      columnType: 'tinyint',
      unique: true, // Un solo contacto por anunciante
      required: true
    },

    // Relacion 0-n Anunciante > Anuncios
    anuncios: {
      collection: 'Anuncio',
      via: 'idAnunciante'
    },

    // Relacion 0-n Anunciante > Resenia
    resenias: {
      collection: 'Resenia',
      via: "idAnunciante"
    }

  },

};

