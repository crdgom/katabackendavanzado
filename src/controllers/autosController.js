import autoModel from "../models/autoModel.js";
import brandsModel from "../models/brandsModel.js";

export const getAutos = (req, res) => {
    try{
        const autos = autoModel.find({}).populate('brand');

        autos.exec()
        .then((autos) => {
            res.json(autos);
        })
    }catch(e){
        console.error(e);
    }
}


export const getAutosView = async (req, res) => {
    try{
        const autos = await autoModel.find({}).populate('brand');
        res.render('index', { autos });
    }catch(e){
        console.error(e);
    }
}


export const getAuto = (req, res) => { // creo la funcion asincrona getAuto
    const { id } = req.params; // recupero el id del auto a buscar desde la URL
    try {
      const auto = autoModel.findById(id).populate('brand'); // busco el auto por el id y con el populate traigo los datos de la marca
      auto.exec() // ejecuto la busqueda
        .then((auto) => {
          if (auto) { // si el auto existe
            res.json(auto); // lo muestro en el body de la respuesta
          } else {
            res.status(404).json({ message: 'Auto no encontrado' }); // si no existe muestro el error 404 que no se encontro el auto
          }
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: 'Error al obtener el auto' });  // si no se encontro el auto muestro el error 500
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener el auto' }); // si no se encontro el auto muestro el error 500
    }
  };

// create an auto document in the autos collection

export const createAuto = async (req, res) => {  // creo la funcion asincrona
  const { brand, model, version, price } = req.body; // recupero los datos del body en formato json

  try {
    const foundBrand = await brandsModel.findOne({ brand }).exec(); // busco la marca por el elemento brand en el body 

    if (foundBrand) { // si la marca existe
      const auto = new autoModel({  // comienzo a crear el auto
        brand: { // creo el objeto brand
          _id: foundBrand._id, // le asigno el id de la marca encontrada
          name: foundBrand.brand, // le asigno el nombre de la marca encontrada
          branch: foundBrand.branch, // le asigno la sucursal de la marca encontrada
          country: foundBrand.country, // le asigno el pais de la marca encontrada
          contact: foundBrand.contact // le asigno el contacto de la marca encontrada
        },
        model, // le asigno el modelo del auto desde el body
        version,  // le asigno la version del auto desde el body
        price // le asigno el precio del auto desde el body
      });

      auto.save() // guardo el auto
        .then((auto) => { // si se guardo correctamente
          const { brand, model, version, price } = auto; // recupero los datos del auto guardado en formato json
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
        }) // que es todo lo anterior
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: 'Error al crear el auto' }); // si no se guardo correctamente muestro el error
        });
    } else {
      res.status(404).json({ message: 'Marca no encontrada' }); // si no se encontró la marca muestro el error
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la marca' }); // si no se encontró la marca muestro el error
  }
};





// update an auto document in the autos collection

export const updateAuto = (req, res) => { // creo la funcion asincrona
    const { id } = req.params; // recupero el id del auto a buscar desde la URL
    const { brand, model, version, price } = req.body; // recupero los datos del body en formato json (los datos a actualizar se puede pasar cualquiera o todos)
    try{
        const auto = autoModel.findByIdAndUpdate( id, { brand, model, version, price } , { new: true }); // busco el auto por el id y actualizo los datos con los datos del body (solo los de el auto, la marca no se actualiza acá)
        auto.exec() // ejecuto la busqueda
        .then((auto) => {
        if (auto) { // si el auto existe
            res.json(auto); // lo muestro en el body de la respuesta con el brand( solo el id, el resto de los datos se pueden obtener con el populate)
            } else {
            res.status(404).json({ message: 'Auto no encontrado' }); // si no existe muestro el error 404 que no se encontro el auto
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el auto' }); // si no se encontro el auto muestro el error 500
        });
    }catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Error al obtener el auto1' }); // si no se encontro el auto muestro el error 500
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