//Stock Market Protfolio App

const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path'); //stores local path so static folder can be located with directory name line 8

const PORT = process.env.PORT || 5000; //allows you to use port 5000 locally ar once uploaded to webhost whatever host has defined

//Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "so hello Joe, say what do you know?"

//Set handlebar routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: otherstuff
    });
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server Listening on port ' + PORT));