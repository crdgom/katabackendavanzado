import { Router } from 'express';
import { getAutos, getAuto, createAuto, updateAuto, deleteAuto, getAutosView} from '../controllers/autosController.js';


const router = Router();

// ? endpoints for Autos routes (getAutos, getAuto, createAuto, updateAuto, deleteAuto)

router.get('/api/v1/getAutos',getAutos);
router.get('/api/v1/getAuto/:id',getAuto);
router.get('/api/v1/getAutosView',getAutosView);
router.post('/api/v1/createAuto', createAuto);
router.put('/api/v1/updateAuto/:id',updateAuto);
router.delete('/api/v1/deleteAuto/:id', deleteAuto);

export default router;