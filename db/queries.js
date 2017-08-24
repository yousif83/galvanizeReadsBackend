var knex = require('./knex')

module.exports = {
	getAllBooks: function() {
		return knex('books').orderBy('id','asc')
	} ,
	getBookById: function(id) {
		return knex('books')
		 .where('id', id)
	},
	getAuthorsbyBookId: function(bookId) {
		return knex('author')
		.select('*')
		.join('book_author','book_author.author_id','author.id')
		.where('book_author.book_id',bookId)
	},
	getAllAuthors: function(){
		return knex('author')
	},
	addNewBook:function(body){
		return knex('books').insert({title: body.title , genre:body.genre , description:body.description,cover:body.cover})
		                    .returning('id')
	},
	updateBookById:function(body,id){
		return knex('books')
.where('id', id)
.update({title: body.title , genre:body.genre , description:body.description,cover:body.cover})
	},
	deleteAllAuthorsBook:function(id){
		return knex('book_author')
		       .where('book_id', id)
					 .del()

	},
	addAuthorsToNewBook:function(bookId,authorId){
		return knex('book_author').insert({book_id: bookId , author_id:authorId })

	}

}
//
// var body1={
//     title:"any thing",
//     genre:"c#",
//     description:"dfgfg dffdgfdg dfgdfgdfgd",
//     cover:"https//:fgfgfgfdgdfd.com",
//     authors:['abbas','shakeeb','daban']
//   }
