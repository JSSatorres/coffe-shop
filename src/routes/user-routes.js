const {Router} = require('express');
const {getUser,addUser,deleteUser,editUser}= require('../controllers/user-controllers')


const routerUser = Router();


routerUser.get("/",getUser)
routerUser.post("/",addUser)
routerUser.delete("/:id",deleteUser)
routerUser.put("/:id",editUser)

module.exports = routerUser;
