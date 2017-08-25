var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const queries = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getAllAuthors().then(authors => {
		res.json(authors)
	})
});

router.get('/book/:id', function(req, res, next){
  queries.getBooksByAuthorId(req.params.id).then(authors => {
    res.json(authors)
  })
})

module.exports = router;
