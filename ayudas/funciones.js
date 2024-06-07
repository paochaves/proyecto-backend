import jwt from "jsonwebtoken";

export function generarToken(payload) {
    return new Promise((resolver, rechazar)=>{
        jwt.sign(payload, "llave secreta", {expiresIn: "1h"},(error, token)=>{
            if (error) {
                rechazar({error});
            } else {
                resolver({token});
            }
        });
    });
}
//sign genera un token