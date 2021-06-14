const {Schema, model, ObjectId} = require('mongoose')

const Shopping = new Schema({
    name:{type:String, required: true},
    date:{type:Date, default:Date.now()},
    user:{type:ObjectId, ref:'User'},
    urgently:{type:Boolean, default:false},
    done:{type:Boolean, default:false}
})

module.exports = model('Shopping', Shopping)