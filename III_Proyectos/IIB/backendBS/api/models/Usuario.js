/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'Usuario',

  attributes: {
    contrasenia: {type: 'string'},
    correo: {type: 'string'},
    nombre: {type: 'string',  maxLength: 30},
    apellido: {type: 'string',  maxLength: 30},

    // Relacion 0-1 Usuario > Cliente
    cliente: {
      collection: 'Cliente',
      via: 'idUsuario'
    },

    // Relacion 0-1 Usuario > Anunciante
    anunciante: {
      collection: 'Anunciante',
      via: 'idUsuario'
    }

  },

};

