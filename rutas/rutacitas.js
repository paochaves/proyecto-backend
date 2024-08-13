import { Router } from "express";
import controladorCitas from "../controladores/controladorcitas.js";

const rutaCitas = Router();

rutaCitas.post('/', controladorCitas.crearCita);

export default rutaCitas;