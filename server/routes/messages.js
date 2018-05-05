var express = require('express');
var router = express.Router();
var paginate = require('./../middlewares/paginate').paginate;
var Message = require('./../models/Message');

router.get('/', paginate, async function (req, res) {
  try {
    const { offset, limit } = req.query;
    const messages = await Message.find().skip(offset).limit(limit);
    res.send({ count: messages.length, messages});
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;