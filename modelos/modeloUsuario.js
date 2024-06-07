import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema(
    {
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    nombreDeUsuario: {type: String, required: true},
    fechaDeNacimiento: {type: Date, required: true},
    tipoDeDocumento: {type: String, required: true},
    numeroDeDocumento: {type: String, required: true},
    genero: {type: String, required: true},
    telefono: {type: Number, required: true},
    pais: {type: String, required: true},
    ciudadDeResidencia: {type: String, required: true},
    direccion: {type: Schema.Types.Mixed, required: true},
    correoElectronico: {type: String, required: true},
    contrasenia: {type: String, required: true},
    confirmarContrasenia: {type: String, required: true},
});

export default model("Usuario", esquemaUsuario);