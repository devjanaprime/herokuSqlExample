var express = require('express');
var pg = require('pg');
var app = express();
var path = require('path');

var connectionString = require('../modules/connection');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

/* Get route to return all food in the database. */
app.get('/food', function (req, res) {
  console.log('hit the food route');
  console.log(connectionString);

  var client = new pg.Client(connectionString);

  //connect to the database
  client.connect(function(err) {
    if(err){
      console.log(err);
    }

    //execute query
    client.query("SELECT * FROM food", function(err, results) {
      if(err){
        console.log(err);
      }

      //disconnect the client
      client.end(function(err) {
        if(err){
          console.log(err);
        }
      });

      res.json(results.rows);
    });
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('listenting on 3000');
});
