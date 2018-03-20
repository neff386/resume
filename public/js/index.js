require('dotenv').config();
const PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();
app.use(express.static('public'));


app.listen(PORT, function(err) {

    console.log('running');
    
});