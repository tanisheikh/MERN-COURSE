// Object of express - used to initialize app object.
const express = require('express');

// To connect with specific path.
const path = require('path');

// To work with hbs file.
const exphbs = require('express-handlebars');

//Parse the value from html element.
const bodyparser = require('body-parser');

// App is initialized by using express and its used to create get, post, put, delete api.
var app = express();

//App used the parsed value provided by bodyParser.
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

//Views = Hbs file will be placed insicde the views.
app.set('views', path.join(__dirname, '/views/'));

// We are using hbs instead of html.
app.set('view engine', 'hbs');

app.get('/CreateNewAccount',(req,res)=>{
	res.render('CreateNewAccount');
});

app.get('/SignIn',(req,res)=>{
	res.render('SignIn');
});


//Localhost server port number declared by using listen.
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
