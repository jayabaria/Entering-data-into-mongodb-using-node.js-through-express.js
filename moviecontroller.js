const express =require('express');
var router=express.Router();
const mongoose=require('mongoose');
const Moviedeatils =mongoose.model('movie');

router.get('/',(req,res)=>{
    res.render('UI/view',{
        data : "insert movie"
    });
});


router.post('/',(req,res) => {
    insertRecord(req,res);
});


function insertRecord(req,res){
    var movie=new Movie();
    movie.imoviename=req.body.imoviename;
    movie.udescription=req.body.udescription;
    movie.image=req.body.image;
    movie.save((err,doc)=>{
if (!err) {
    res.redirect('view');
}
else {
    if(err.name ==  'validationerror'){
    handleerror(err,req.body);
}
    else
         console.log('Error occured while insertng data: '+err);
}
    });                               //it will save in schema object
}

function handleerror(err,body){
    for(field in err.errors)
    {
            switch(err.errors[field].path){
                case 'moviename':
                    body['movienameerror'] =err.errors[field].message;
                break;
                case 'moviedetails':
                    body['moviedetailserror'] =err.errors[field].message;
                break;
                case 'image':
                body['imageerror'] =err.errors[field].message;
                 break;
            }
    }
}
module.exports=router;