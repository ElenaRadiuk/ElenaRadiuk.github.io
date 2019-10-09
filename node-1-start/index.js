var express = require('express');
var app = express();


app.use('/static', express.static(__dirname + "/public"));



app.use("/", function(req, res, next){
    console.log('middleware');
    next();
    // res.sendFile(__dirname + "/public/about.html")
})

app.use("/about", function(req, res){
    let id = req.query.id;
    let user = req.query.user;
    res.send("<h2></h2><p>id=" + id + " user=" + user + "</p>");
    // http://localhost:3007/about?id=10&user=Super 
    // id=10 user=Super
})

app.get('/', function(req, res){
    res.send('Hello2');
})

app.listen(3007, function(){
    console.log('listen3 port 3007');
})