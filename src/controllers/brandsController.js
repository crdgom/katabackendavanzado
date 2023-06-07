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
    try{
        const { id } = req.params;
        const brand = brandsModel.findById(id);
        brand.exec()
        .then((brand) => {
            if(brand){
                res.json(brand);
            }
            else{
                res.status(404).json({ message: 'Brand not found' });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Error getting the brand' });
        });
    }
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

    const { id } = req.params;
    const { brand, branch, country, contact } = req.body;
    try{
        const updateBrand = brandsModel.findByIdAndUpdate(id, { brand, branch, country, contact }, { new: true });
        updateBrand.exec()
        .then((brand) => {
            res.json(brand);
        }
        )
    }
    catch(e){}
};

export const deleteBrand =  (req, res) => {
    const { id } = req.params;
    try{
        const deleteBrand = brandsModel.findByIdAndDelete(id);
        deleteBrand.exec()
        .then(() => {
            res.json({ message: 'Brand deleted' });
        })
    }
    catch(e){}
};