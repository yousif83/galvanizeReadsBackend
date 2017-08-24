var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const queries = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getAllBooks().then(books => {
		res.json(books)
	})
});
router.get('/:id', function(req,res){
  let id=req.params.id
  queries.getBookById(id).then(book => {
    res.json(book)
  })
});
router.get('/author/:id', function(req, res) {
  var bookId =req.params.id
  queries.getAuthorsbyBookId(bookId).then(books => {
		res.json(books)
	})
});
router.post('/add', function(req, res) {
	queries.addNewBook(req.body).then(data => {
		console.log(data[0])
		res.json(data)
    return (data[0])
	}).then(data => {
    var bookId=data

    for (var i = 0; i < req.body.authors.length; i++) {

      queries.addAuthorsToNewBook(bookId,req.body.authors[i]).then(data => {

      })
    }

  })
});
router.put('/edit/:id', function(req, res){
  queries.updateBookById(req.body, req.params.id).then(data => {
    res.json(data)
  }).then(function() {
    queries.deleteAllAuthorsBook(req.params.id).then(data => {
    }).then(data => {
      var bookId=req.params.id
      console.log(req.body.authors)
      console.log(req.params.id)
      for (var i = 0; i < req.body.authors.length; i++) {

        queries.addAuthorsToNewBook(bookId,req.body.authors[i]).then(data => {

        })
      }
    })
  })
})

module.exports = router;
