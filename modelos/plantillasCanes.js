import { Schema, model } from "mongoose";

const esquemaCan = new Schema(
    {
    foto: {type: String, required: true},
    //raza: {type: String, required: true},
    nombre: {type: String, required: true},
    color: {type: String, required: true},
    sexo: {type: String, required: true},
    edad: {type: String, required: true},
    caracter: {type: String, required: true},
    estadoDeSalud: {type: String, required: true},
    tamanio: {type: Schema.Types.Mixed, required: true},
    //peso: {type: Schema.Types.Mixed, required: true},
    });

export default model("can", esquemaCan);
