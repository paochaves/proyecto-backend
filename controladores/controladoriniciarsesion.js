import bcryptjs from 'bcryptjs';
import { generarToken, verificarToken } from '../ayudas/funciones.js';
import ModeloUsuario from '../modelos/modeloUsuario.js';

const ControladorIniciarSesion = {
  
  iniciarSesion: async (solicitud, respuesta) => {
    console.log("solicitud", solicitud);
    try {
      const { username, password } = solicitud.body;
      const usuarioEncontrado = await ModeloUsuario.findOne({
        correoElectronico: username,
      });
      console.log("usuarioEncontrado", usuarioEncontrado);
      const contraseniaValidada = await bcryptjs.compare(
        password,
        usuarioEncontrado.contrasenia
      );
console.log('contraseniaValidada :>> ', contraseniaValidada);
      if (contraseniaValidada) {
        const token = await generarToken({
          id: usuarioEncontrado._id,
          name: usuarioEncontrado.nombre,
        });
        respuesta.json({
          resultado: 'bien',
          mensaje: 'acceso permitido',
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
      console.log("token", token);
      const decodificado = await verificarToken(token);
      if (decodificado.id) {
        respuesta.json({
          resultado: 'bien',
          mensaje: 'token válido',
          datos: decodificado,
        });
      } else {
        respuesta.json({
          resultado: 'mal',
          mensaje: 'token no válido',
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al validar token',
        datos: error,
      });
    }
  },
};

export default ControladorIniciarSesion;