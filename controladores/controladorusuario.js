const controladorUsuario = {
    crearUsuario: async (solicitud, respuesta) => {
        try {
            console.log("solicitud body: ", solicitud.body);
            if (solicitud.body.nombre === "") throw new Error("Falta el nombre");
            if (solicitud.body.apellido === "") throw new Error("Falta el apellido");
            if (solicitud.body.nombreDeUsuario === "") throw new Error("Falta el nombre de usuario");
           // if (solicitud.body.foto === "") throw new Error("Falta su foto");
            if (solicitud.body.fechaDeNacimiento === "") throw new Error("Falta su fecha de nacimiento");
            if (solicitud.body.tipoDeDocumento === "") throw new Error("Falta el tipo de documento");
            if (solicitud.body.numerodedocumento === "") throw new Error("Falta el numero de documento");
            if (solicitud.body.genero === "") throw new Error("Falta el genero");
            if (solicitud.body.telefono === "") throw new Error("Falta el telefono");
            if (solicitud.body.pais === "") throw new Error("Falta el pais");
            if (solicitud.body.ciudadDeResidencia === "") throw new Error("Falta la ciudad de residencia");
            if (solicitud.body.direccion === "") throw new Error("Falta la direccion");
            if (solicitud.body.email === "") throw new Error("Falta el email");
            if (solicitud.body.contrasenia === "") throw new Error("Falta la contrasenia");
            if (solicitud.body.confirmeContrasenia === "") throw new Error("Falta confirmar contrasenia");
            respuesta.json({mensaje: "Post usuario works"}); 
        } catch (error) {
            console.log("error: ", error);
            respuesta.json({error: true, mensaje: "Ocurrio un error al crear el usuario"});
        }
    },
leerUsuario: async (solicitud, respuesta) => {
    try {
        console.log(solicitud.params.id);
        respuesta.json({mensaje: "Se leyo correctamente leer usuario"});
    } catch (error) {
        console.log("error: ", error);
        respuesta.json({error: true, mensaje: "Ocurrio un error al leer usuario"});
    }
    },
leerUsuarios: async (solicitud, respuesta) => {
    try {
        respuesta.json({mensaje: "Se leyeron correctamente los usuarios"});
    } catch (error) {
        console.log("error: ", error);
        respuesta.json({error: true, mensaje: "Ocurrio un error al leer usuarios"});
    }
},
actualizarUsuario: async (solicitud, respuesta) => {
    try {
        console.log("id: ", solicitud.params.id);
        console.log("solicitud body: ", solicitud.body);
        respuesta.json({mensaje: "Se actualizo correctamente el usuario"});
    } catch (error) {
        console.log("error: ", error);
        respuesta.json({error: true, mensaje: "Ocurrio un error al actualizar el usuario"});
    }
},
eliminarUsuario: async (solicitud, respuesta) => {
    try {
        console.log("id: ", solicitud.params.id);
        respuesta.json({mensaje: "Se elimino correctamente el usuario"});
    } catch (error) {
        console.log("error: ", error);
        respuesta.json({error: true, mensaje: "Ocurrio un error al eliminar el usuario"});
    }
}
}

export default controladorUsuario;
/*
const usuario = {
    nombre: "Paola",
    apellido: "Chaves",
    nombreDeUsuario: "Paito",
    foto: "",
    fechaDeNacimiento: "02/05/1994",
    tipoDeDocumento: "Cedula",
    numeroDeDocumento: "1.016.065.722",
    genero: "Femenino",
    telefono: "61836667",
    pais: "Panama",
    ciudadDeResidencia: "Ciudad de Panama",
    direccion: "calle 81 casa i 720",
    email: "paolachaves@bit.institute",
    contrasenia: "12345678",
    confirmarContrasenia: "12345678"
}
*/