import Jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";
import userModel from "../models/userModel.js";

export const userDeletionValidation = async (req, res, next) => {
    try{
        let token = req.headers['x-access-token']

        if (!token)return res.status(403).json({ message: "No token provided" });

        const decode = Jwt.verify(token, SECRET);

        // crear la regla de negocio que dicte que:
        // si el usuario es admin, puede eliminar usuarios
        // si el usuario es user, no puede eliminar usuarios
        // Si el usuario es el mismo que se quiere eliminar, puede eliminar su cuenta

        const user = await userModel.findById(decode.id, {password: 0});
        if (!user) return res.status(404).json({ message: "No user found" });

        if(user.role === "admin"){
            next();
        }else if(user.role === "user"){
            return res.status(403).json({ message: "You are not allowed to delete users" });
        }else if(user._id === req.params.id){
            next();
        }else{
            return res.status(403).json({ message: "You are not allowed to delete users" });
        }
    }catch(e){
        res.json({message: "Error en la verificacion no puedes hacer esto"})
    }
}
