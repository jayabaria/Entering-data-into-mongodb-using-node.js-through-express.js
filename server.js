require('./Model/db');  // this is request stement for databse cooncation must require  

const express = require('express'); // this staement will start express server
const path =require('path');
const exphbs=require('express-handlebars');
const moviecontroller = require('./Control/moviecontroller');
const bodyparser = require('body-parser');

var  app =express(); // we will call express function with variable app
app.use(bodyparser.urlencoded({
    extended : true
}));
app.use(bodyparser.json());
app.set('UI',path.join(__dirname,'/UI/view'));        //here we aetting view directory
app.engine('hbs',exphbs({ extname: 'hbs',defaultLayout: 'view'}));//now we have to configure the express engine for handlebars
app.set('view engine','hbs');

app.listen(1122,() => {
    console.log('Express server started on port  : 1122');
});

app.use('/movie',moviecontroller);