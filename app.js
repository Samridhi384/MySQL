const { faker } = require('@faker-js/faker');

const mysql = require('mysql');

// console.log(faker.internet.email());

// console.log(faker.date.past());

// function generateAddress() {
//   console.log(faker.address.streetAddress());
//   console.log(faker.address.city());
//   console.log(faker.address.state());
// }

// generateAddress();
// generateAddress();
// generateAddress();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your root username
  database: 'shop', // the name of your db
  password: '12345',
});

// connection.query("SELECT 1+5 as answer", function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].answer);
// });

// var q = "SELECT CURTIME() as time, CURDATE() as date, NOW() as now";

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].time);
//   console.log(results[0].date);
//   console.log(results[0].now);
// });

//selecting data from table

//var q = "SELECT * from users";
// var q = "SELECT count(*) as total from users";

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });

//inserting data from user table
// var q = "INSERT INTO users(email) values('sam@gmail.com')";

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// var person = {
//   email: faker.internet.email(),
//   created_at: faker.date.past(),
// };

// connection.query("INSERT INTO users set ?", person, function (error, results) {
//   if (error) throw error;
//   console.log(results);
// });

//inserting lot of data
var data = [];
for (var i = 0; i < 500; i++) {
  data.push([faker.internet.email(), faker.date.past()]);
}

var q = 'INSERT INTO users (email, created_at) VALUES ?';
connection.query(q, [data], function (err, result) {
  console.log(err);
  console.log(result);
});

connection.end();
