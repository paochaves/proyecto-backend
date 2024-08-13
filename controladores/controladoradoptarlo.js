import esquemaadoptarlo from "../modelos/plantillaadoptarlo.js";


const controladoptarlo = {
	crearCita: async (req, res) => {
		try {
			console.log("Datos recibidos:", req.body);
			const esquema = new esquemaadoptarlo(req.body);
			await esquema.save();
			res.status(201).send(esquema);
		} catch (error) {
			res.status(401).send(error);
		}
	}
};

export default controladoptarlo;