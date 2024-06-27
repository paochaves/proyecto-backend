import bcrypt from 'bcryptjs';
import ModeloUsuario from "../modelos/modeloUsuario.js";

        const controladorUsuario = {
            crearUsuario: async (solicitud, respuesta) => {
                try {
                    const contrasenia  = solicitud.body.contrasenia;
                    const contraseniaProtegida = await bcrypt.hash(contrasenia, 10)//incriptar la contraseña
                    const nuevoUsuario = new ModeloUsuario({
                        nombre: solicitud.body.nombre,
                        apellido: solicitud.body.apellido, 
                        nombreDeUsuario: solicitud.body.nombreDeUsuario,
                        fechaDeNacimiento: solicitud.body.fechaDeNacimiento,
                        tipoDeDocumento: solicitud.body.tipoDeDocumento,
                        numeroDeDocumento: solicitud.body.numeroDeDocumento,
                        genero: solicitud.body.genero,
                        telefono: solicitud.body.telefono,
                        pais: solicitud.body.pais, 
                        ciudadDeResidencia: solicitud.body.ciudadDeResidencia, 
                        direccion: solicitud.body.direccion,
                        correoElectronico: solicitud.body.correoElectronico, 
                        contrasenia: contraseniaProtegida,
                     });
                        console.log(contraseniaProtegida);
                                            
           const usuarioCreado = await nuevoUsuario.save();
            if (usuarioCreado._id) {
            respuesta.json ({
               resultado: "bien",
               mensaje: "usuario creado",
               datos: usuarioCreado._id
            });
            }
    
        } catch (error) {
            respuesta.json ({
                resultado: "mal",
                mensaje: "Ocurrio un error al crear el usuario",
                datos: error
            });
        }
    },
leerUsuario: async (solicitud, respuesta) => {
    try {
        const usuarioEncontrado = await ModeloUsuario.findById(solicitud.params.id)
        if (usuarioEncontrado._id)
        respuesta.json ({
            resultado: "bien",
            mensaje: "usuario leído",
            datos: usuarioEncontrado._id
         });
    } catch (error) {
        respuesta.json ({
            resultado: "mal",
            mensaje: "Ocurrio un error al leer usuario",
            datos: error
        });
    }
    },
leerUsuarios: async (solicitud, respuesta) => {
    try {
        const todosLosUsuarios = await ModeloUsuario.find();
            respuesta.json ({
            resultado: "bien",
            mensaje: "usuarios leídos",
            datos: todosLosUsuarios,
         });
        
    } catch (error) {
        respuesta.json ({
            resultado: "mal",
            mensaje: "Ocurrio un error al leer todos los usuarios",
            datos: error,
        });
    }
},
actualizarUsuario: async (solicitud, respuesta) => {
    try {
        const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(solicitud.params.id, solicitud.body);
        if (usuarioActualizado._id);
        respuesta.json ({
            resultado: "bien",
            mensaje: "usuario actualizado",
            datos: usuarioActualizado._id,
         });
                
    } catch (error) {
        respuesta.json ({
            resultado: "mal",
            mensaje: "Ocurrio un error al actualizar usuario",
            datos: error,
        });
    }
},
eliminarUsuario: async (solicitud, respuesta) => {
    try {
        const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(solicitud.params.id)
        if (usuarioEliminado._id)
        respuesta.json ({
            resultado: "bien",
            mensaje: "usuario eliminado",
            datos: null
         });
    } catch (error) {
        respuesta.json ({
            resultado: "mal",
            mensaje: "Ocurrio un error al eliminar usuario",
            datos: error
        });
}}
};

export default controladorUsuario;
