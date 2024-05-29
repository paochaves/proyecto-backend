import mongoose from "mongoose";// esto es una promesa
mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato)=>{
    console.log("Bien, conectado a la base de datos");
    }).catch((error)=>{
        console.log("Mal, ocurrio un error y no se conecto a la base de datos");
    });