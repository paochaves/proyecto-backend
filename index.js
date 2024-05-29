import "dotenv/config";
import "./conexionBD.js";
import servidor from "./servidor.js";

servidor.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000");
});



