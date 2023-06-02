import e from "express";
import autoModel from "../models/autoModel.js";

export const getAutos = (req, res) => {
    try{
        const autos = autoModel.find({});

        autos.exec()
        .then((autos) => {
            res.json(autos);
        })
    }catch(e){
        console.error(e);
    }
}   

export const getAuto = (req, res) => {
    const { _id } = req.params;
    try{
        const auto = autoModel.findById(_id);
        auto.exec()
        .then((auto) => {
            res.json(auto);
        })
    }catch(e){
        console.error(e);
    }
}

// create an auto document in the autos collection

export const createAuto = (req, res) => {
    const { brand, model, version, price } = req.body;
    try{
        const auto = new autoModel({ brand, model, version, price });
        auto.save()
        .then((auto) => {
            res.json(auto);
        })
    }catch(e){
        console.error(e);
    }
}




/* export const createAuto = (req, res) => {
    const { brand, model, version, price } = req.body;
    try{
        const auto = await autoModel.save({ brand, model, version, price });
        res.json(auto);
    }catch(e){
        console.error(e);
    }
} */
