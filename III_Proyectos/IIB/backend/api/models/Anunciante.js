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
    reputacion: {type: 'number'},
    ocupacion: {type: 'string'},
    experiencia: {type: 'number'},

    // Relacion 1-1 Anunciante < Usuario
    idUsuario: {
      model: 'Usuario',
      unique: true, // Un solo Usuario por anunciante
      required: true
    },

    // Relacion 1-1 Anunciante < Contacto
    idContacto: {
      model: 'Contacto',
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

