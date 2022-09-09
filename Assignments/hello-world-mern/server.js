const express = require('express');
//allows for cross-origin requests
//such as api on localhost/8000 and react on localhost/3000
const cors = require('cors')

const app = express();
app.use(cors())
/*similar to doing: 
    function (app) {
        app.get('/api', PersonController.index);
    }

    //but we've abstracted it already
*/
require('./server/routes/person.routes')(app)

const port = 8000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
