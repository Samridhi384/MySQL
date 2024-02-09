const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your root username
  database: 'shop', // the name of your db
  password: '12345',
});

app.get('/', function (req, res) {
  //find count of users in DB
  var q = 'SELECT COUNT(*) as count FROM users';
  connection.query(q, function (error, result) {
    if (error) throw error;
    var count = result[0].count;
    //respond with that count
    // res.send(`We have ${count} users in our DB`);
    res.render('home', { count: count });
  });
});

app.post('/register', function (req, res) {
  var person = { email: req.body.email };

  connection.query(
    'INSERT INTO users set ?',
    person,
    function (error, results) {
      if (error) throw error;
      //   console.log(results);
    }
  );
  res.redirect('/');
});

app.get('/joke', function (req, res) {
  var joke = '<strong> haha its u </strong> <em>a joke</em>';
  res.send(joke);
});

app.get('/random_num', function (req, res) {
  var num = Math.floor(Math.random() * 10) + 1;
  res.send(`your lucky number , ${num}`);
});

app.listen(8080, function () {
  console.log('server listening on port 8080');
});
