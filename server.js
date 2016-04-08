var express = require('express');
var final=require('./modules/account.js');
var app = express();

app.listen(3000);
console.log("Final balance: " + final.balance());
console.log("Final account: " + final.account());

app.use(express.static('public'));
app.get('/', function (req, res, next) {
  res.sendfile(__dirname + "/public/index.html");
});

app.get('/balance', function(request, response, next){
  response.send(final.account());
});
