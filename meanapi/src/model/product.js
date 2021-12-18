const mongoose=require("mongoose");

const productschema=new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    qty:{
        type:Number,
        required:true
    }
});

const product=new mongoose.model("product",productschema);

module.exports=product;