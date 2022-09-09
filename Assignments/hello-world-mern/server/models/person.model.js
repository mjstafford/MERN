//brings in mongoose db so that this model connects with the DB
const mongoose = require('mongoose')

//first and last name are strings
//the timestamp will provide something similar to createdAt updatedAt
const PersonSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true })


module.exports.Person = mongoose.model("Person", PersonSchema)