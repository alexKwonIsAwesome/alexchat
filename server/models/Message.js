var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  }
});

MessageSchema.pre('save', async function (next) {
  try {
    const message = this;
    message.date = new Date();
    next();
  } catch (e) {
    next(e);
  }
});

module.exports = mongoose.model('Message', MessageSchema);