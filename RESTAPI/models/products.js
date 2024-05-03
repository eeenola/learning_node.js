const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ({
    name : {
        type : String ,
        required : true ,
    } ,
    price : {
        type : Number ,
        required : [true , "price must be provided"],
    },
    featured : {
        type : Boolean ,
        default : true ,
    },
    rating : {
        type : Number ,
        default : 4.9 ,
    },
    createdAt : {
        type : Date ,
        default : Date.now(),
    },
    Company : {
        type : String ,
        enum : {
            values : ["apple" , "Samsung" , "dell" ,"mi" ,"colors"],
            message : `{VALUE} is not supported` ,
        },
    } ,
});


module.exports = mongoose.model("Product" , productSchema);