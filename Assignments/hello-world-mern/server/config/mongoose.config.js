const mongoose = require('mongoose');

//creates the database "crmdb" if it doesn't already exist
//otherwise it just connects to the existing one
//Obviously, that name should change per project!
mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

