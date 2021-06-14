const {Schema, model, ObjectId} = require('mongoose')

const User = new Schema({
    name:{type:String},
    login:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    avatar:{type:String},
    workList:[{type:ObjectId, ref:'Work'}],
    shoppingList:[{type: ObjectId, ref:'Shopping'}],
    sharedUser:[{type:ObjectId, ref:'User'}]
})

module.exports = model('User', User)