import mongoose from "mongoose";// esto es una promesa
mongoose.connect("mongodb+srv://usuario-0:usuario-0@cluster0.hizbiwv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((dato)=>{
    console.log("Bien, conectado a la basew de datos");
    }).catch((error)=>{
        console.log("Mal, ocurrio un error y no se conecto a la base de datos");
    })