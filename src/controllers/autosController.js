import autoModel from "../models/autoModel.js";
import brandsModel from "../models/brandsModel.js";

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
    const { id } = req.params;
    try {
      const auto = autoModel.findById(id);
      auto.exec()
        .then((auto) => {
          if (auto) {
            res.json(auto);
          } else {
            res.status(404).json({ message: 'Auto no encontrado' });
          }
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: 'Error al obtener el auto' });
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener el auto' });
    }
  };

// create an auto document in the autos collection

export const createAuto = async (req, res) => {
  const { brand, model, version, price } = req.body;

  try {
    const foundBrand = await brandsModel.findOne({ brand }).exec();

    if (foundBrand) {
      const auto = new autoModel({
        brand: {
          _id: foundBrand._id,
          name: foundBrand.brand,
          branch: foundBrand.branch,
          country: foundBrand.country,
          contact: foundBrand.contact
        },
        model,
        version,
        price
      });

      auto.save()
        .then((auto) => {
          const { brand, model, version, price } = auto;
          res.json({
            brand: {
              _id: foundBrand._id,
              name: foundBrand.brand,
              branch: foundBrand.branch,
              country: foundBrand.country,
              contact: foundBrand.contact,
            },
            model,
            version,
            price
          });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: 'Error al crear el auto' });
        });
    } else {
      res.status(404).json({ message: 'Marca no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la marca' });
  }
};





// update an auto document in the autos collection

export const updateAuto = (req, res) => {
    const { id } = req.params;
    const { brand, model, version, price } = req.body;
    try{
        const auto = autoModel.findByIdAndUpdate( id, { brand, model, version, price } , { new: true });
        auto.exec()
        .then((auto) => {
        if (auto) {
            res.json(auto);
            } else {
            res.status(404).json({ message: 'Auto no encontrado' });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el auto' });
        });
    }catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Error al obtener el auto1' });
      }
}


// delete an auto document in the autos collection

export const deleteAuto = (req, res) => {
    const { id } = req.params;
    try {
      const auto = autoModel.deleteOne({ _id: id });
      auto.exec()
        .then((result) => {
          res.json(result);
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: 'Error al eliminar el auto' });
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar el auto' });
    }
  };
