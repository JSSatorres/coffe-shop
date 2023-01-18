const Role = require ('../models/role-model')
const User = require ('../models/user-model')

const validateRole = async (rol="") =>{
    const isRoleExits = await Role.findOne({rol})
    if(!isRoleExits){
        throw new Error(`El rol ${rol} no esta regitrado`)
    }
}

const validateEmail =  async (email="")=>{
    const isEmailExits = await User.findOne({email})
    if(isEmailExits){
        throw new Error(`El email ${email} ya esta regitrado`)
    }
}

const validateUserId =  async (id="")=>{
    const isUserExits = await User.findById(id)
    if(!isUserExits){
        throw new Error(`El id ${id} no existe`)
    }
}

module.exports={validateRole,validateEmail,validateUserId}