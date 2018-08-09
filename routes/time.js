var express = require('express');
var router = express.Router();

var requestTime = (req, res, next) => {
  req.requestTime = Date.now()
  next()
}

router.use(requestTime)
router.use((req, res, next) => {
	req.author = 'Adam Lasak | 2018';
	next();
});

router.get('/time', (req, res, next) => {
	var outputString = `<p>Requested time: ${req.requestTime}</p>`;
	outputString += `<p>${req.author}</p>`;
  res.send(outputString);
});

module.exports = router;
