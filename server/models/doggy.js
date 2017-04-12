var mongoose = require('mongoose');
var DoggySchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: [2, '2 or more characters']},
  type: {type: String, required: true, minlength: [2, '2 to 200 characters']}
}, {timestamps: {createdAt: 'created_at'}})

var Doggy = mongoose.model('Doggy', DoggySchema);
