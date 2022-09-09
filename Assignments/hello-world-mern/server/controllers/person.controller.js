//brings in the  person model so that we can interact with the database via the model
const { Person } = require('../models/person.model')


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    //per the model we will recieve the below input so we can destructure it
    const { firstName, lastName } = request.body

    //create is a built in method that comes with Mongoose via our Person model!
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err))
}