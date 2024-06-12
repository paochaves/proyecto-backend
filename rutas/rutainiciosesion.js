import { Router }from "express";
import controladorIniciarSesion from "../controladores/controladoriniciarsesion.js";

const enrutadorIniciarSesion = Router();

enrutadorIniciarSesion.post('/', controladorIniciarSesion.iniciarSesion );
enrutadorIniciarSesion.get('/:token', controladorIniciarSesion.validarToken );
export default enrutadorIniciarSesion;
