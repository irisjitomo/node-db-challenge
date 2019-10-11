
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', table => {
      table.increments();
      table.string('name', 255).notNullable();
      table.text('description');
      table.boolean('completed').defaultTo(0).notNullable();
  })
  .createTable('resource', table => {
    table.increments();
    table.string('name', 255).notNullable();
    table.text('description')
    table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  })
  .createTable('task', table => {
      table.increments();
      table.text('description').notNullable();
      table.text('notes');
      table.boolean('completed').defaultTo(false).notNullable();
      table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  })
  .createTable('join', table => {
      table.increments();
      table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

      table
      .integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resource')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

      table
      .integer('task_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('task')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('join')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('projects')
};
