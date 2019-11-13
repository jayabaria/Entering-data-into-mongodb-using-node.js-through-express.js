const mongoose = require('mongoose'); //REquest stement for mongoose

var movieSchema = new mongoose.Schema({
//in this we have two fields were movie name and movie details
moviename: {
    type:String
},
details: {
    type:String 
},
image:{
    type:String
} 
}); // created object for movie schema 
//so we have created the schema now we have to register in it 
//so we will call model function 
mongoose.model('./movie',movieSchema); //movie is the name of schema in db so new records will be inserted into the movie