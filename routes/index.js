var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
 	res.render('index', { title: 'API desert, jarhead!' });
});

module.exports = router;
