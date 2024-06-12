import bcryptjs from 'bcryptjs';
import { generarToken, verificarToken } from '../ayudas/funciones.js';
import ModeloUsuario from '../modelos/modeloUsuario.js';

const ControladorIniciarSesion = {
  iniciarSesion: async (solicitud, respuesta) => {
    try {
      const { username, password } = solicitud.body;
      const usuarioEncontrado = await ModeloUsuario.findOne({
        correoElectronico: username,
      });
      console.log(usuarioEncontrado);
      const contraseniaValidada = await bcryptjs.compare(
        password,
        usuarioEncontrado.contrasenia
      );
      if (contraseniaValidada) {
        const token = await generarToken({
          id: usuarioEncontrado._id,
          name: usuarioEncontrado.nombre,
        });
        respuesta.json({
          resultado: 'bien',
          mensaje: 'acceso permitido',
          datos: usuarioEncontrado._id,
          datos: token,
        });
      } else {
        respuesta.json({
          resultado: 'mal',
          mensaje: 'acceso denegado',
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al iniciar sesión',
        datos: error,
      });
    }
  },
  validarToken: async (solicitud, respuesta) => {
  try {
    const token = solicitud.params.token;
    const decodificado = await validarToken(token);
    if (decodificado.id) {
      respuesta.json({
        resultado: 'bien',
        mensaje: 'token valido',
        datos: decodificado,       
      });
    } else {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'token no valido',
        datos: null,
      });
    }
  } catch (error) {
    respuesta.json({
      resultado: 'mal',
      mensaje: 'ocurrió un error al validar el token',
      datos: error,
    });
  }
},
};

export default ControladorIniciarSesion;