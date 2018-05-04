var express = require('express');
var router = express.Router();

router.get('/', async function (req, res) {
  try {
    res.send('asdf');
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;