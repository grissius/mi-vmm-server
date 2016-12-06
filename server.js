const express = require('express');
const port = 4000;
const app = express();

require('./config/routes')(app);

app.listen(port, () => console.log(`App listenning on port ${port}`));