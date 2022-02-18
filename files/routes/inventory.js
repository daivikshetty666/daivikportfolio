let express = require('express');
let router = express.Router();

/* GET About page. */
router.get('/', function(req, res, next) {
    res.send('respond');
  });

  
module.exports = router;