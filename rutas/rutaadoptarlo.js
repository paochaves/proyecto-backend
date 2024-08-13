import { Router } from "express";
import controladorAdoptarlo from "../controladores/controladoradoptarlo.js";

const rutaAdoptarlo = Router();

rutaAdoptarlo.post('/', controladorAdoptarlo.crearCita);

export default rutaAdoptarlo;