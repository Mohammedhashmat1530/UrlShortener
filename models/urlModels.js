const mongoose = require('mongoose');
const ShortUniqueId = require('short-unique-id');

const uid = new ShortUniqueId({ length: 10 });

const UrlSchema= new mongoose.Schema({
    full:{
        type: String,
        required: true,
    },
    short:{
        type:String,
        required: true,
        unique:true,
        default: uid.rnd()
    },
    clicks:{
        type:Number,
        default:0,
        required:true
    }

})


const ShortUrls=mongoose.model("ShortUrls",UrlSchema);

module.exports=ShortUrls;


  