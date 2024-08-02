import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    countryCode:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

}, {timestamps:true}
)

const User =  mongoose.model('User', userSchema)

export default User;