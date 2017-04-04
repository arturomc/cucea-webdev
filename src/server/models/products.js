//Modulo de dependencias
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var products = new Schema({
    id: Number,
    name: String,
    description: String,
    extra: Array,
    price: Number,
    image: String,
}) 

//Exportar products
mongoose.model('products', products);
