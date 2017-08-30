var express = require('express');
var router = express.Router();
const log4js = require('log4js');


const loggers = log4js.getLogger('myapp');
loggers.trace('Entering cheese testing');
loggers.debug('Got cheese.');
loggers.info('Cheese is Gouda.');
loggers.warn('Cheese is quite smelly.');
loggers.error('Cheese is too ripe!');
loggers.fatal('Cheese was breeding ground for listeria.');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
