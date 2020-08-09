require('dotenv').config();
const PORT = process.env.PORT || 5000;
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('public'));


app.get('/resume', function (req, res) {
    res.download(path.resolve('docs/Resume_of_David_Turner.docx'), 'Resume_Of_David_Turner.docx');
});

app.listen(PORT, function(err) {

    console.log(`running @: http://localhost:${PORT}/`);
    
});