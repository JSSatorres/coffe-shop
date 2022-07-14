const getUser = (req,res ) =>{

    const {name, age} = req.body;

    res.json({
        msg:"get Api",
    })

}
const addUser = (req,res ) =>{

    const {name, age} = req.body;

    res.json({
        msg:"post Api",
        name,
        age
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