const mongoose = require('mongoose')
const { use } = require('../routes/users')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    userType : {
        type : String,
        required : true
    },
    status : {
        type : Boolean,
        required : true,
        default : false
    }
})

module.exports = mongoose.model('User', userSchema)