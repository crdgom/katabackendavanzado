import { Router } from 'express';
import validate from '../middleware/validateMiddleware.js';
import { getBrands, getBrand, createBrand, updateBrand, deleteBrand} from '../controllers/brandsController.js';


const router = Router();

// ? endpoints for Brands routes (getBrands, getBrand, createBrand, updateBrand, deleteBrand)

// * Protected routes with middleware validate

router.get('/api/v1/getBrands', validate, getBrands);
router.get('/api/v1/getBrand/:id', validate, getBrand);
router.post('/api/v1/createBrand', validate, createBrand);
router.put('/api/v1/updateBrand/:id', validate, updateBrand);
router.delete('/api/v1/deleteBrand/:id', validate, deleteBrand);

export default router;