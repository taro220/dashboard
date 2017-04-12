var mongoose = require('mongoose');
var Doggy = mongoose.model('Doggy');
var doggies = require('../controllers/doggies.js')
module.exports = function(app){

  app.get('/', function(req, res) {
    doggies.show(req,res);
  })
  app.get('/doggies/new', function(req, res){
    res.render('newDoggyForm');
  })

  app.post('/doggies', function(req, res) {
    doggies.create(req,res);
  })

  app.get('/doggies/edit/:id', function(req, res){
    // console.log(req.params.id);
    doggies.loadEdit(req,res);
  })

  app.post('/doggies/:id', function(req,res){
    doggies.edit(req,res);
  });

  app.post('/doggies/destroy/:id', function(req,res){
    doggies.destroy(req,res);
  });
}
