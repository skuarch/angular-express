var express = require('express');
var router = express.Router();
const log4js = require('log4js');
const loggers = log4js.getLogger('myapp');


/* GET users listing. */
router.get('/', function(req, res, next) {
  loggers.trace('Entering cheese testing');
  loggers.debug('Got cheese.');
  loggers.info('Cheese is Gouda.');
  loggers.warn('Cheese is quite smelly.');
  loggers.error('Cheese is too ripe!');
  loggers.fatal('Cheese was breeding ground for listeria.');
  res.send('respond with a resource');
});

module.exports = router;
