/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await knex.schema.createTable('comments', (table) => {
    table.increments('id').primary();
    table.string('comment').notNullable();
    table.string('post_id', 255).notNullable();
    table.string('user_id', 255).notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return await knex.schema.dropTable('comments');
};
