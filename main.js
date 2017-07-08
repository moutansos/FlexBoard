const express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var data = {
        title: 'FlexBoard - Space', 
        header: 'Main Header' 
    }

    res.render('space', data);
});

app.listen(8080, function() {
    console.log('Server listening on port 8080');
})