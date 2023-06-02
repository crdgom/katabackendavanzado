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

/* export const getAuto = async (req, res) => {
    try{
        const auto = await autosModel.findById(req.params.id);
        res.json(auto);
    }catch(e){
        console.error(e);
    }
} */