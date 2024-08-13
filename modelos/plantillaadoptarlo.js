import { Schema, model } from "mongoose";

const esquemaadoptarlo = new Schema({
	fecha: { type: String, required: true }
});

export default model("adoptarlo", esquemaadoptarlo);