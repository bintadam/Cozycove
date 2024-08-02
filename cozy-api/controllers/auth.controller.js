import User from "../models/user.model"

export const signin = async(req, res, next)=>{
    const {countryCode, phoneNumber} = req.body
    if(!countryCode|| !phoneNumber || countryCode === '' || phoneNumber === ''){
        console.log('All fields are required')
    }
    try{
        const validUser = User.findOne({phoneNumber})
        if(!validUser){
            console.log('User not found')
        }
    }catch(error){
        console.error(error)
    }
}