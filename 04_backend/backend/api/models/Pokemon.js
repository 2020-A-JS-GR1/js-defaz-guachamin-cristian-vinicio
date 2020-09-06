/**
 * Pokemon.js
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

    /* Relaciones */
    // Pokemon -> Usuario
    usuario: { // Nombre FK
      model: 'Usuario', // Modelo con el cual relacionamos
      required: true, // Requerido 1 - N;
                // false // Opcional 0 -N (por defecto)

    },

    // Pokemon - Batalla
    batallas: {
      collection: 'Batalla',
      via: 'pokemon'
    }

  },

};

