/**
 * Batalla.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type: 'string',
      required: true // por defecto es false
    },


    // Batalla -> Pokemon
    pokemon: { // Nombre FK
      model: 'Pokemon',
      required: true,

    }
  },

};

