import bcrypt from 'bcryptjs';
import ModeloUsuario from "../modelos/modeloUsuario.js";

        const controladorUsuario = {
            crearUsuario: async (solicitud, respuesta) => {
                try {
                    const { nombre, apellido, nombreDeUsuario, fechaDeNacimiento, tipoDeDocumento, numeroDeDocumento, genero, telefono, pais, ciudadDeResidencia, direccion, correoElectronico, contrasenia } = solicitud.body;
                    const contraseniaProtegida = await bcrypt.hash(contrasenia, 10)//incriptar la contraseña
                    const nuevoUsuario = new ModeloUsuario({
                        nombre,
                        apellido, 
                        nombreDeUsuario, 
                        fechaDeNacimiento, 
                        tipoDeDocumento,
                        numeroDeDocumento, 
                        genero, 
                        telefono, 
                        pais, 
                        ciudadDeResidencia, 
                        direccion, 
                        correoElectronico, 
                        contrasenia: contraseniaProtegida,
                     });
                        console.log(contraseniaProtegida);
            if (solicitud.body.nombre === "") throw new Error("Falta el nombre");
            if (solicitud.body.apellido === "") throw new Error("Falta el apellido");
            if (solicitud.body.nombreDeUsuario === "") throw new Error("Falta el nombre de usuario");
            if (solicitud.body.fechaDeNacimiento === "") throw new Error("Falta su fecha de nacimiento");
            if (solicitud.body.tipoDeDocumento === "") throw new Error("Falta el tipo de documento");
            if (solicitud.body.numeroDeDocumento === "") throw new Error("Falta el numero de documento");
            if (solicitud.body.genero === "") throw new Error("Falta el genero");
            if (solicitud.body.telefono === "") throw new Error("Falta el telefono");
            if (solicitud.body.pais === "") throw new Error("Falta el pais");
            if (solicitud.body.ciudadDeResidencia === "") throw new Error("Falta la ciudad de residencia");
            if (solicitud.body.direccion === "") throw new Error("Falta la direccion");
            if (solicitud.body.correoElectronico === "") throw new Error("Falta el correo electronico");
            if (solicitud.body.contrasenia === "") throw new Error("Falta la contrasenia");
                                 
           const usuarioCreado = await nuevoUsuario.save();
            if (usuarioCreado._id) {
            respuesta.json ({
               resultado: "bien",
               mensaje: "usuario creado",
               datos: usuarioCreado._id
            });
            }
            respuesta.json({mensaje: "Post usuario works"}); 
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
            datos: leerUsuario
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
