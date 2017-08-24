
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author' , (table)=>{
    table.increments()
    table.text('firstName')
    table.text('lastName')
    table.text('portriat')
    table.text('bio')
  })
};

exports.down = function(knex, Promise) {
  return knex.dropTableIfExists('author')
};
