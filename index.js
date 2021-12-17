var express = require('express');
var { engine } = require('express-handlebars');
const path = require('path');
const bp = require("body-parser");

var index = require('./controller/calculator');

var app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set("views", path.join(__dirname, 'view'));
app.use('/', index);
app.listen(3000, function() {
    console.log('listening on port 3000')
});