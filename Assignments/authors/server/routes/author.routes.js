const AuthorController = require('../controllers/author.controller')
module.exports = function (app) {
    app.get('/api/Authors', AuthorController.findAllAuthors)
    app.get('/api/Authors/:id', AuthorController.findOneAuthor)
    app.put('/api/Authors/:id/edit', AuthorController.updateOneAuthor)
    app.delete('/api/Authors/:id/delete', AuthorController.deleteOneAuthor)
    app.post('/api/Authors/new', AuthorController.createAuthor)
}