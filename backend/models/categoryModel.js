const mongoose = require('mongoose');


const categorySchema = mongoose.Schema({
    name : {
        type:String,
        required:true,
        unique:false,
    },
    description : {
        type:String,
        default:"No discription"
    },
    image:{
        type:String,
        default:'',
        attrs:[{key:{type:String},value:[{type:String}]}]
    }
});

categorySchema.index({description : 1})
const Category = mongoose.model("Category",categorySchema);
module.exports = Category;