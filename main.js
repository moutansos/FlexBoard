const express = require('express');
const rh = require('./route-handlers.js');

var app = express();
app.set('view engine', 'ejs');

app.get('/', rh.renderSpace);
app.use('/dist', express.static('./dist'))

app.listen(8080, function() {
    console.log('Server listening on port 8080');
});