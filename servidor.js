import express from "express";
import cors from "cors";
import morgan from "morgan";
import enrutadorUsuarios from "./rutas/rutausuarios.js";
import enrutadorIniciarSesion from "./rutas/rutainiciosesion.js";
import enrutadorCanes from "./rutas/rutas.js";
import rutaCitas from "./rutas/rutacitas.js";
import rutaAdoptarlo from "./rutas/rutaadoptarlo.js";


const servidor = express();

servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use("/usuarios", enrutadorUsuarios);
servidor.use("/iniciarSesion", enrutadorIniciarSesion);
servidor.use("/can", enrutadorCanes);
servidor.use("/validarToken", enrutadorIniciarSesion);
servidor.use("/appointments", rutaCitas);
servidor.use("/esquema", rutaAdoptarlo);

servidor.get('/', (solicitud, respuesta) => {
    respuesta.status(404).send('No encontrado');
  });

export default servidor;