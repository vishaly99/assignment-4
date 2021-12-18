const mongoose=require("mongoose");

const loginschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
});

const login=new mongoose.model("login",loginschema);
module.exports=login;