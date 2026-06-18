var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var pool = mysql.createPool({
  host: 'localhost',
  user: 'SupremeAdmin',
  password: 'Internsh1p_;-;',
  database: 'intern_day3',
  connectionLimit: 5
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST login credentials and validate against intern_day3.users */
router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  if (!username || !password) {
    return res.status(400).render('login-error', {
      message: 'Username and password are required.'
    });
  }

  pool.query(
    'SELECT password FROM users WHERE username = ? OR email = ? LIMIT 1',
    [username, username],
    function(err, results) {
      if (err) {
        console.error('Login query failed:', err);
        return res.status(500).render('login-error', {
          message: 'Unable to log in right now. Please try again later.'
        });
      }

      if (results.length === 0 || results[0].password !== password) {
        return res.status(401).render('login-error', {
          message: 'Invalid username or password.'
        });
      }

      return res.redirect('http://localhost:5173/dashboard.html');
    }
  );
});

module.exports = router;
