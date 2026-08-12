const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:1,
        max:100
    },
    department:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

});

module.exports=mongoose.model("Student",studentSchema);