import userModel from "../models/userModel.js";
import { encryptPassword, comparePassword } from "../models/userModel.js";
import Jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const getUsers = async (req, res) => {
    try{
        const users = await userModel.find();
        res.status(200).json(users);
    }
    catch(e){
        res.status(404).json({message: e.message});
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    try{
        const user = await userModel.findById(id);
        res.status(200).json(user);
    }
    catch(e){
        res.status(404).json({message: e.message});
    }
};

export const createUser = async (req, res) => {
    const {userAlias, userName, userLastName, userAge, userMail, userPassword, userPhone, userAddress, userType, userStatus, userImage, rol} = req.body;

        const newUser = new userModel({
            userAlias,
            userName,
            userLastName,
            userAge,
            userMail,
            userPassword: await encryptPassword(userPassword),
            userPhone,
            userAddress,
            userType,
            userStatus,
            userImage,
            rol
        });
        const saveUser = await newUser.save();
        
        const token = Jwt.sign({id: saveUser._id}, SECRET, { algorithm: 'RS256' }, {
            expiresIn: 86400 // 24 horas
        });
        res.status(200).json({token});
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const {userAlias, userName, userLastName, userAge, userMail, userPassword, userPhone, userAddress, userType, userStatus, userImage} = req.body;
    try{
        const updatedUser = await userModel.findByIdAndUpdate(id, {userAlias, userName, userLastName, userAge, userMail, userPassword, userPhone, userAddress, userType, userStatus, userImage}, {new: true});
        res.status(200).json(updatedUser);
    }
    catch(e){
        res.status(404).json({message: e.message});
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
        await userModel.findByIdAndDelete(id);
        res.status(200).json({message: 'User deleted successfully'});
    }
    catch(e){
        res.status(404).json({message: e.message});
    }
};


export const userLogin = async (req, res) => {
    // buscar el usuario en la base de datos
    const findUser = await userModel.findOne({userMail: req.body.userMail});
    if(!findUser) return res.status(400).json({message: 'User not found'});

    // validar la contraseña
    const matchPassword = await comparePassword(req.body.userPassword, findUser.userPassword);
    if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'});

    // crear el token

    const token = Jwt.sign({id: findUser._id}, SECRET, {
        // expira en 5 horas
        expiresIn: 18000
    });
    res.redirect('/api/v1/getAutosView')

    res.json({token});
}