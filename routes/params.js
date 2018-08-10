var express = require('express');
var router = express.Router();

router.get('/params/:idRoute/wtf/:name', (req, res, next) => {
	res.json(req.params);
});

module.exports = router;
