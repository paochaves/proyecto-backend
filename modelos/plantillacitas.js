import { Schema, model } from "mongoose";

const appointmentSchema = new Schema({
	hogarTemporal: { type: Boolean, default: false },
	paseadorCanino: { type: Boolean, default: false },
	voluntariadoDeLimpieza: { type: Boolean, default: false },
	veterinaria: { type: Boolean, default: false },
	donar: { type: Boolean, default: false },
	fecha: { type: String, required: true }
});

export default model("cita", appointmentSchema);