const express = require('express');
const cors = require('cors')


const app = express();
require('./server/routes/person.routes')(app)
/*similar to doing: 
    function (app) {
        app.get('/api', PersonController.index);
    }

    //but we've abstracted it already
*/

app.use(cors())


const port = 8000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
