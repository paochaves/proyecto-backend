import { Router }from "express";
import controladorIniciarSesion from "../controladores/controladoriniciarsesion.js";

const enrutadorIniciarSesion = Router();

enrutadorIniciarSesion.post('/', controladorIniciarSesion.iniciarSesion );

export default enrutadorIniciarSesion;
