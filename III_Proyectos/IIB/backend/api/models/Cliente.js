/**
 * Cliente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'Cliente',

  attributes: {

    // Relacion 1-1 Cliente < Usuario
    idUsuario: {
      model: 'Usuario',
      unique: true, // Un solo usuario por cliente
      required: true
    },

    // Relacion 0-n Cliente > Solicitud
    solicitudes: {
      collection: 'Solicitud',
      via: 'idCliente'
    },

    // Relacion 0-n Anunciante > Cliente
    resenias: {
      collection: 'Resenia',
      via: "idCliente"
    }

  },

};

