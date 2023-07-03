import { Router } from 'express';
import { getAutos, getAuto, createAuto, updateAuto, deleteAuto, getAutosView} from '../controllers/autosController.js';
/* import validate from '../middleware/validateMiddleware.js'; */

const router = Router();

// ? endpoints for Autos routes (getAutos, getAuto, createAuto, updateAuto, deleteAuto)

router.get('/api/v1/getAutos', /* validate, */ getAutos);
router.get('/api/v1/getAuto/:id', /* validate, */ getAuto);
router.post('/api/v1/createAuto', /* validate, */ /* upload.single('image'), */  createAuto);
router.put('/api/v1/updateAuto/:id', /* validate, */ updateAuto);
router.delete('/api/v1/deleteAuto/:id', /* validate,  */deleteAuto);

// ? endpoint for views for Autos routes

router.get('/api/v1/getAutosView', getAutosView);
router.get('/api/v1/getAutosView/:id', /* validate, */ getAutosView);
router.post('/api/v1/createAutoView', /* validate, */ createAuto);
router.put('/api/v1/updateAutoView/:id', /* validate, */ updateAuto);
router.delete('/api/v1/deleteAutoView/:id', /* validate, */ deleteAuto);

export default router;