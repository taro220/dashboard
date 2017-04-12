var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var moment= require('moment');
var bodyParser = require('body-parser');
// Require path
// mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
require('./server/config/mongoose.js');
// Routes
// Root Request
var routes_setter = require('./server/config/routes.js')

routes_setter(app);
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
