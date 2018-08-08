var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/route/:idRoute/wtf/:name', (req, res, next) => {
  res.json(req.params);
});

module.exports = router;
