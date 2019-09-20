var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.use() 

app.get('/', function(req, res){
    res.send('Hello2');
})

app.listen(3007, function(){
    console.log('listen3 port 3007');
})