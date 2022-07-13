const {Schema, model}= require("mongoose")

const UserSchema = Schema({
    nombre:{
        type:String,
        require:[true, 'el nombre del usuario es requerido']
    },
    correo:{
        type:String,
        require:[true, 'el corero del usuario es requerido'],
        unique:true
    },
    password:{
        type:String,
        require:[true, 'la contraseña es obligatoria']
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        require:true,
        emun:["ADMIN_ROLE","USER_ROLE"]
    },
    state:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
})

module.exports=model("Users",UserSchema)