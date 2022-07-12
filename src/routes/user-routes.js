const {Router} = require('express');


const routerUser = Router();


routerUser.get("/",(req,res)=>{
    res.send("peraaa")
})

module.exports = routerUser;
