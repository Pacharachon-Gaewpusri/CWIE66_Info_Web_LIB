var express = require('express');
var app = module.exports = express();
var port = 3000;


// app.get('/', (req, res) => {
//   res.redirect('');
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'SupremeAdmin',
  password: 'Internsh1p_;-;',
  database: 'intern_day3',
});

connection.connect();
connection.query('SELECT * FROM `user_list`', (err, rows, fields) => {
  if (err) throw err;

  console.log('User list: ', rows);
});

  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)

// connection.end();