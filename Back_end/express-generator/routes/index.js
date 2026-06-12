var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'SupremeAdmin',
//   password: 'Internsh1p_;-;',
//   database: 'intern_day3',
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();