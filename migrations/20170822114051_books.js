
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table) => {
   table.increments()
   table.text('title').notNullable()
   table.text('genre')
   table.text('description')
   table.text('cover')

})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')
};
