/* import Jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";
import userModel from "../models/userModel.js";

/* export const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });
    jwt.verify(token, config.SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Unauthorized" });
        req.userId = decoded.id;
        next();
    });
}; */

/* export const validate = async (req, res, next) => {
    try{
        let token = req.headers['x-access-token']

        if (!token)return res.status(403).json({ message: "No token provided" });

        const decoded = Jwt.verify(token, SECRET);

        // crear consulta a la base de datos para recuperar el usuario
        const user = await userModel.findById(decoded.id, {password: 0});
        if (!user) return res.status(404).json({ message: "No user found" });

        next();

    }catch(e){
        res.json({message: "Error en la verificacion"})
    }
    
}

export const validateSessionCookie = async (req, res, next) => {
    try{
        
        if (req.session.loggedIn && req.cookie.user) {
            return next();
        } else {
            res.redirect('/login');
        }

    }catch(e){
        res.json({message: "Error en la verificacion"})
    }
    
}; */