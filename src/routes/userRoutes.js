import { Router } from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/userController.js';


const router = Router();

// ? endpoints for User routes (getUser, getUser, createUser, updateUser, deleteUser)

router.get('/api/v1/getUser',getUser);
router.get('/api/v1/getUser/:id',getUser);
router.post('/api/v1/createUser', createUser);
router.put('/api/v1/updateUser/:id',updateUser);
router.delete('/api/v1/deleteUser/:id', deleteUser);

export default router;