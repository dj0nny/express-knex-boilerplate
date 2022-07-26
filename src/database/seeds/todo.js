/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todo').del();
  await knex('todo').insert([
    { id: 1, name: 'Clean the house' },
    { id: 2, name: 'Clean the car' },
    { id: 3, name: 'Clean the garden' },
  ]);
};
