const {Schema, model, ObjectId} = require('mongoose')

const Work = new Schema({
    name:{type:String, required: true},
    description:{type:String},
    date:{type:Date, default:Date.now()},
    user:{type:ObjectId, ref:'User'},
    urgently:{type:Boolean, default:false},
    done:{type:Boolean, default:false}
})

module.exports = model('Work', Work)