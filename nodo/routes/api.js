var express = require('express');
var router = express.Router();
const executeQuery=require('../modules/sqlscript.js');
router.get('/', function(req, res, next) {
  res.send('sei sulle api')
});

router.get('/vips', function(req, res, next) {
   res.setHeader('Content-type','application/json');
  executeQuery(`select * from vips`,function(error,results){
    results=JSON.parse(JSON.stringify(results))
    res.send({result:results})
    
    ;})
});

module.exports = router;
