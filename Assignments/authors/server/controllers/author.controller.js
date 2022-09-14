const { Author } = require('../models/author.model')

// Find all Authors
module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

// Find One Author
module.exports.findOneAuthor = (req, res) => {
    //find one id req.params (url)
    Author.findById({ _id: req.params.id })
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}

//Create new Author 
module.exports.createAuthor = (req, res) => {
    const { name } = req.body

    Author.create({
        name
    })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
    //status(400) is to catch/notify front-end of errors specified in Model
    /*Example of what the error looks like:
        {
            "errors": {
                "name": {
                    "message": "name is required",
                    "name": "ValidatorError",
                    "properties": {
                        "message": "name is required",
                        "type": "required",
                        "path": "name"
                    },
                    "kind": "required",
                    "path": "name"
                }
            },
            "_message": "Author validation failed",
            "message": "Author validation failed: name: Name is required",
            "name": "ValidationError"
        }
     */
}

//update new Author 
module.exports.updateOneAuthor = (req, res) => {
    const updatedData = req.body
    const id = req.params.id

    Author.findByIdAndUpdate(id, updatedData, {
        runValidators: true,
        new: true,
    })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
    //status(400) is to catch/notify front-end of errors specified in Model

}

//delete Author By ID 
module.exports.deleteOneAuthor = (req, res) => {
    const id = req.params.id

    Author.findByIdAndDelete(id)
        .then(author => res.json(author))
        .catch(err => res.json(err))
}