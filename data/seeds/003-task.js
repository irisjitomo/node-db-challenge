
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'set up donation box for charity', notes: '', project_id: 2},
        {description: 'put down card', notes: 'blue eyes white drage card', project_id: 3},
        {description: 'donate', notes: '', project_id: 2}
      ]);
};
