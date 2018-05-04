require('dotenv').config({ path: 'variables.env'});
var mongoose = require('mongoose');

var mongoDB = process.env.DATABASE;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('Successfully connected to mongodb');
});

module.exports = mongoose;