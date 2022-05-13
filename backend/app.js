'use strict'
// initialization dotenv
require('dotenv').config();
// initialization express   
const express = require('express');
// initialization body-parser
const bodyParser = require('body-parser');
// initialization cors
const cors = require('cors');
const app = express();
const {router} = require('./routes/router');

// initialization port
const port = process.env.PORT || 3000;

// cors origin option
const corsOptions = {
    origin: `http://localhost:${port}`,
};
app.use(cors(corsOptions));

// routing
app.use('/', router);
// port connection
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
