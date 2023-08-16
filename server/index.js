const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
var bodyParser = require('body-parser');

//install and import bodyparser
// app.use(bodyParser());

app.use(express.static('client/dist'));
// app.use(express.urlencoded());

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})