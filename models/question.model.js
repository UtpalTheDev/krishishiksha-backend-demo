const mongoose=require('mongoose');
require("mongoose-type-url");
//schema

const questionSchema=new mongoose.Schema({
String:{}
},{strict:false})
//model creation
const questionmodel=mongoose.model('question',questionSchema);

module.exports={questionmodel}