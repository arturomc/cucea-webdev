//Instanciando express y mongoose
var express = require('express');
var mongoose	= require('mongoose');

mongoose.connect(conf.db.url);

//Modelo: Base de datos elchilaquil
module.exports = {
    db: {
        url: "mongodb://127.0.0.1:27017/elchilaquilDB"
    }
}

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