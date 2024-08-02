import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
        default:"https://media.istockphoto.com/id/1495088043/de/vektor/benutzerprofil-symbol-avatar-oder-personensymbol-profilbild-porträtsymbol-standard.jpg?s=612x612&w=0&k=20&c=mmj93kpr1sFn8VJYI_MUabWE4B86zRD5Uf9fBbTbQqk="
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

}, {timestamps:true}
)

const User =  mongoose.model('User', userSchema)

export default User;