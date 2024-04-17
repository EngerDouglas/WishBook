var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/load', function(req, res, next) {
  res.render('index', { title: 'Express' });
  try {
    connection.query('SELECT * FROM link', function(error, results, fields){
      if(error){
      throw error;
      
      console. log('The solution is: ', results[0])
      console. log('fields: ', fields)
      }
    });
  }catch (e) {
    
  }
});


module.exports = router;
