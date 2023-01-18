const User = require ('../models/user-model')
const bcryptjs = require ('bcryptjs');
/* const inputValidator = require ("../middlewares") */

const getUser = (req,res ) =>{

    const {q,name, apiKey,page=1, limit} = req.query;

    res.json({
        msg:"get Api",
        q,
        name,
        apiKey,
        page,
        limit
    })

}
const addUser = async (req,res ) =>{

    
    const {name, email,password,rol} = req.body;
    const user = new User({name, email,password,rol});

    //authenticate unique email
    const emailIs = await User.findOne({email})
    if(emailIs){
        return res.status(400).json({msg:'el correo ya esta registrado'})
    }

    //encrypt password
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password,salt)

    //safe user in BD
    await user.save()

    res.json({
        msg:"post Api",
        user
    })
}
const deleteUser = (req,res ) =>{

    const {id} = req.params;

    res.json({
        msg:"delete Api",
        id
    })

}
const editUser = (req,res) =>{

    const {name, age} = req.body;
    const {id} = req.params;

    res.json({
        msg:"put Api",
        id
    })

}


module.exports={getUser,addUser,deleteUser,editUser}