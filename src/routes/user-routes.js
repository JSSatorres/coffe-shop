const {Router} = require('express');
const { check } = require('express-validator');
const {getUser,addUser,deleteUser,editUser}= require('../controllers/user-controllers');
const { inputValidator } = require('../middlewares/inputValidate');
const Role = require ('../models/user-model')


const routerUser = Router();


routerUser.get("/",getUser)

routerUser.post("/",[
    check("name","el nombre es obligatorio").not().isEmpty(),
    check("email","el correo no tiene el formato adecuado").isEmail(),
    check("password","el password es obligatorio y mas de  5 letras").isLength({min:6}),
    /* check("rol","no es un rol valido").isIn(["ADMIN_ROLE", "USER_ROLE"]), */
    check("rol").custom(async (rol="") =>{
        const isRoleExits = await Role.findOne({rol})
        if(!isRoleExits){
            throw new Error(`El rol ${rol} no esta regitrado`)
        }
    }),
    inputValidator
],addUser)

routerUser.delete("/:id",deleteUser)

routerUser.put("/:id",editUser)

module.exports = routerUser;
