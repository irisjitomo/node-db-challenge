
exports.seed = function(knex) {
      return knex('resource').insert([
        {
          name: 'cleaning supplies', 
          description: 'To be used to clean',
          project_id: 1
        },

        {
          name: 'blue eyes white dragon', 
          description: 'This legendary dragon is a powerful engine of destruction.',
          project_id: 3
        },

        {
          name: 'trap card', 
          description: 'Just a regular trap card',
          project_id: 3
        }
      ]);
};
