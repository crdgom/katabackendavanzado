import brandsModel from '../models/brandsModel.js';

export const getBrands =  (req, res) => {
    try{
        const brands = brandsModel.find({});

        brands.exec()
        .then((autos) => {
            res.json(autos);
        })
    }
    catch(e){
        console.error(e);
    }
};

export const getBrand =  (req, res) => {
    try{}
    catch(e){}
};

export const createBrand = (req, res) => {
    const { brand, branch, country, contact } = req.body;
    try{
        const newBrand = new brandsModel({ brandId, branch, country, contact });
        newBrand.save()
        .then((brand) => {
            res.json(brand);
        })
    }
    catch(e){
        console.error(e);
    }
};

export const updateBrand =  (req, res) => {
    try{}
    catch(e){}
};

export const deleteBrand =  (req, res) => {
    try{}
    catch(e){}
};