import { Schema, model } from "mongoose";

const citaSchema = new Schema({
    hogarTemporal: {type: Boolean, required: true},
    paseadorCanino: {type: Boolean, required: true},
    voluntariadoDeLimpieza: {type: Boolean, required: true},
    veterinaria: {type: Boolean, required: true},
    donar: {type: Boolean, required: true},
    fecha: {type: String, required: true},
  });

export default model("Cita", citaSchema);

/* app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); */