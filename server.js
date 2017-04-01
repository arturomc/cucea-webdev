var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser);
    
app.get('/', function (req, res) {
  res.send('Hello world');

});

// POST method route
app.post('/', function (req, res) {
    console.log(req.body);  
  res.send('POST request to the homepage');
});
app.listen(4040, function(){
    console.log("Server running");
});