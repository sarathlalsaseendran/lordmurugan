var express = require('express');
var app = express();

app.use(express.static(__dirname + '/{foldername}'));

app.listen('3000');
console.log('working on 3000...');
