
exports.seed = function(knex) {
      return knex('projects').insert([
        {name: 'Clean Up by the Lake', description: 'exactly what it says'},
        {name: 'Charity', description: ''},
        {name: 'Yu-Gi-Oh battles', description: 'its time to du du du duel'}
      ]);
};
