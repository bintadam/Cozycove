import User from "../models/user.model"

export const signin = async(req, res, next)=>{
    const {email, password} = req.body
    if(!email || !password || email === '' || password === ''){
        console.log('All fields are required')
    }
    try{
        const validUser = User.findOne({email})
        if(!validUser){
            console.log('User not found')
        }
    }catch(error){
        console.error(error)
    }
}