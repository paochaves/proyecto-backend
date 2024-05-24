const controladorUsuario = {
    crearUsuario: (solicitud, respuesta) => {
    respuesta.json({mensaje: "Post usuario works"});
},
leerUsuario: (solicitud, respuesta) => {
    respuesta.json({mensaje: "Get usuario works"});
},
leerUsuarios: (solicitud, respuesta) => {
    respuesta.json({mensaje: "Get usuarios works"});
},
actualizarUsuario: (solicitud, respuesta) => {
    respuesta.json({mensaje: "Put usuario works"});
},
eliminarUsuario: (solicitud, respuesta) => {
    respuesta.json({mensaje: "Delete usuario works"});
}
}

export default controladorUsuario;