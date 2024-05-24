import { Router }from "express";
import controladorUsuario from "../controladores/controladorusuario.js";

const enrutadorUsuarios = Router();

enrutadorUsuarios.post('/', controladorUsuario.crearUsuario )
enrutadorUsuarios.get('/:id', controladorUsuario.leerUsuario)
enrutadorUsuarios.get('/', controladorUsuario.leerUsuarios)
enrutadorUsuarios.put('/:id', controladorUsuario.actualizarUsuario)
enrutadorUsuarios.delete('/:id', controladorUsuario.eliminarUsuario)

export default enrutadorUsuarios;