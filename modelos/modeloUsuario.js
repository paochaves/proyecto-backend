import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema(
    {
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    nombreDeUsuario: {type: String, required: true},
    //foto: "",
    fechaDeNacimiento: {type: Date, required: true},
    tipoDeDocumento: {type: String, required: true},
    numeroDeDocumento: {type: Number, required: true},
    genero: {type: String, required: true},
    telefono: {type: Number, required: true},
    pais: {type: String, required: true},
    ciudadDeResidencia: {type: String, required: true},
    direccion: {type: Schema.Types.Mixed, required: true},
    email: {type: String, required: true},
    contrasenia: {type: Number, required: true},
    confirmarContrasenia: {type: Number, required: true},
});

export default model("Usuario", esquemaUsuario);