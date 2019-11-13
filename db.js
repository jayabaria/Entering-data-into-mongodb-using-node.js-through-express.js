const mongoose =require('mongoose'); //this statement enables  the connaction to mongoose databse 

mongoose.connect('mongodb://localhost:27017/Moviedetails',                //here we have pass the URL for the database; 
 { useUnifiedTopology: true},               //this is new feature of mongodb
 (err)=>{                                  //this is callback function
    if(!err){
        console.log(' MongoDB Connected successfully: ');//if we are coonacted to mongodb then this line will be print
    }
    else {
        console.log('Error in MonogoDB connection: '+err);//if we are bot able to connct databse then this will show error
    }
});

require('./Movie_schema'); 