var mongoose = require('mongoose');
var Doggy = mongoose.model('Doggy');
module.exports = {
  show: function(req, res) {
    Doggy.find({}, function(err,doggies){
      // var str = moment(time).format('h:mm:ss a, MMMM Do YYYY')
      // console.log(str)
      if(err){
        console.log("errors")
        res.render('doggyiesHome', {error: 'Error'})
      } else {
        res.render('doggiesHome', { doggies : doggies});
      }
    });
  },
  create: function(req, res) {
    var dog = new Doggy({name: req.body.name, type: req.body.type});
    dog.save(function(err){
      if(err){
        if(err.errors['name']) {
          console.log(err.errors['name'].message)
        }
        if(err.errors['type']) {
          console.log(err.errors['type'].message)
        }
      } else {
        console.log('successfully added user!');
        res.redirect('/');
      }
    });
  },
  loadEdit: function(req, res) {
    Doggy.findOne({_id:req.params.id}, function(err,doggies){
      console.log(doggies)
      res.render('editDoggyForm',{dog: doggies})
    });
  },

  edit: function(req,res) {
    Doggy.findByIdAndUpdate(req.params.id, {
    $set: {
      name: req.body.name,
      type: req.body.type
    }
    }, function(){
      res.redirect('/')
    });
  },

  destroy: function(req,res) {
    Doggy.remove({_id: `${req.params.id}`}, function(err){
      res.redirect('/')
    })
  }

}
