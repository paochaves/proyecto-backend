import { Router } from "express";
import plantillacitas from "../modelos/plantillacitas.js";

const enrutadorCitas = Router();


enrutadorCitas.post('/', async (req, res) => {
    const { hogarTemporal, paseadorCanino, voluntariadoDeLimpieza, veterinaria, donar, fecha } = req.body;
  
    const nuevaCita = new plantillacitas({
      hogarTemporal: hogarTemporal === 'on',
      paseadorCanino: paseadorCanino === 'on',
      voluntariadoDeLimpieza: voluntariadoDeLimpieza === 'on',
      veterinaria: veterinaria === 'on',
      donar: donar === 'on',
      fecha,
    });
  
    await nuevaCita.save();
    res.send('Su cita fue agendada con éxito');
  });
  
export default enrutadorCitas