import express from "express";
import morgan from "morgan";
import enrutadorUsuarios from "./rutas/rutausuarios.js";


const servidor = express();

servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use("/usuarios", enrutadorUsuarios);

servidor.get( function (req, res) {
    res.json({mensaje: "works!"})
})

export default servidor;