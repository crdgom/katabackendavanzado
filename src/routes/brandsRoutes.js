import { Router } from 'express';
import verificar from '../middleware/middleware.js';
import { getBrands, getBrand, createBrand, updateBrand, deleteBrand} from '../controllers/brandsController.js';


const router = Router();

// ? endpoints for Brands routes (getBrands, getBrand, createBrand, updateBrand, deleteBrand)

router.get('/api/v1/getBrands', verificar, getBrands);
router.get('/api/v1/getBrand/:id',getBrand);
router.post('/api/v1/createBrand', createBrand);
router.put('/api/v1/updateBrand/:id',updateBrand);
router.delete('/api/v1/deleteBrand/:id', deleteBrand);

export default router;