var express = require('express');
var router = express.Router();
var paginate = require('./../middlewares/paginate').paginate;
var Message = require('./../models/Message');

router.get('/', paginate, async function (req, res) {
  try {
    const { offset, limit } = req.query;
    const docs = await Message.find().sort({ date: 'desc' }).skip(offset).limit(limit);
    res.send({ count: docs.length, messages: docs});
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/', async function (req, res) {
  try {
    const { username, message } = req.body;
    const doc = await new Message({
      username,
      message,
    }).save();
    res.send(doc);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;