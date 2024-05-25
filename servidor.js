import express from "express";
import enrutadorUsuarios from "./rutas/rutausuarios.js";

const servidor = express();

servidor.use(express.json());
servidor.use("/usuarios", enrutadorUsuarios);

servidor.get( function (req, res) {
    res.json({mensaje: "works!"})
})

export default servidor;