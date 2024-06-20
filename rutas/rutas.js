import { Router }from "express";
import controladorcanes from "../controladores/controladorcanes.js";

const enrutadorCanes = Router();

enrutadorCanes.post('/', controladorcanes.crearCan )
enrutadorCanes.get('/:id', controladorcanes.leerCan)
enrutadorCanes.get('/', controladorcanes.leerCanes)
enrutadorCanes.put('/:id', controladorcanes.actualizarCan)
enrutadorCanes.delete('/:id', controladorcanes.eliminarCan)

export default enrutadorCanes;