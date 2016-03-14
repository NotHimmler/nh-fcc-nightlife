var express = require('express');
var app = express();
var path = require('path');
var hbs = require('express-handlebars');

app.engine('hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));

require('./app/routes.js')(app);

process.env.CONSUMER_SECRET = process.argv[2];

process.env.TOKEN_SECRET = process.argv[3];

console.log(process.env.NODE_ENV);

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function(){
    console.log("Server running at http://localhost:"+app.get('port')+" - Press Ctrl + C to terminate.")
})