const mongoose = require('./init')

var Artist = mongoose.model('Artist', { 
   name: String
 });

module.exports = Artist