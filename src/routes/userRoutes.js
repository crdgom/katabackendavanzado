import { Router } from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser, userLogin} from '../controllers/userController.js';
import { encryptPassword, comparePassword  } from '../models/userModel.js';
import { userDeletionValidation } from '../middleware/userDeletionMiddleware.js';

const router = Router();

// ? endpoints for User routes (getUser, getUser, createUser, updateUser, deleteUser)

router.get('/api/v1/getUser',getUsers);
router.get('/api/v1/getUser/:id',getUser);
router.post('/api/v1/createUser', createUser);
router.put('/api/v1/updateUser/:id',updateUser);
router.delete('/api/v1/deleteUser/:id', userDeletionValidation, deleteUser);
router.post('/api/v1/login', userLogin); 

export default router;