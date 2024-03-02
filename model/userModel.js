const mongoos = require('mongoose');

const userSchema = new mongoos.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Number,
        required:true
    },
    isVerified:{
        type:Number,
        required:true
    }
});

module.exports = mongoos.model('User',userSchema)   