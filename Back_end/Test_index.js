var express = require('express');
var app = module.exports = express();
var port = 3000;
import app from "./src/app.js";

// app.get('/', (req, res) => {
//   res.redirect('');
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'SupremeAdmin',
  password: 'Internsh1p_;-;',
  database: 'intern_day3',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

// connection.end();