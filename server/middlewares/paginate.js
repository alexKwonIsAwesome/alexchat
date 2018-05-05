var isInt = require('validator/lib/isInt');

var paginate = async function (req, res, next) {
  try {
    let offset = 0;
    let limit = 10;

    if (req.query.offset && isInt(req.query.offset)) {
      offset = parseInt(req.query.offset, 10);
    }

    if (req.query.limit && isInt(req.query.limit)) {
      limit = parseInt(req.query.limit, 10);
    }

    req.query = { offset, limit };
    next();
  } catch (e) {
    next(e);
  }
}

module.exports = {
  paginate
};