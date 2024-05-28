import mongoose from "mongoose";// esto es una promesa
mongoose.connect().then((dato)=>{
    console.log("Bien, conectado a la basew de datos");
    }).catch((error)=>{
        console.log("Mal, ocurrio un error y no se conecto a la base de datos");
    });