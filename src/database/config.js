const mongoose = require ('mongoose')

const dbConnection  = async()=>{
    try {
        await mongoose.connect(process.env.MONDODB_CNN)
        console.log("conexion a base de datos realizda");

        
    } catch (error) {
        console.log(error);
        throw new Error ("Error a la hora de iniciar la base de datos")
    } 
} 

module.exports={dbConnection}