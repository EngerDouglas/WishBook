var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next){
  try{
    console.log('req.body', req.body)
    const user_role = 'development';

    connection.query('INSERT INTO user (username, email, password) VALUES ("${username}","${email}","${password}")', function(error, results, fields){
      if(error){
      throw error;
      
      console. log('The solution is: ', results[0])
      console. log('fields: ', fields)
      }
    });

    return res.json({
      'error': false,
      'message': 'El usuario ha sido creado correctamente'
    });

  }catch(e){
    return res.status(500).json({
      'error': true,
      'message': user_role === 'development' ? e : 'Ha ocurrido un error.'
    });
  }
  
});

router.get('/list', function(req, res, next){
  /*
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  */
    //next();
  
    const users = {
      data_user_1: {
        name: 'Juan ',
        lastname: 'Perez',
      },
      data_user_2: {
        name: 'Junior',
        lastname: 'Acosta',
      },
    }
  
    return res.json(users);
  });

module.exports = router;
