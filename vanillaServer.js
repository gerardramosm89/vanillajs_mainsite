var express = require('express')
var app = express()
var path = require('path');

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

