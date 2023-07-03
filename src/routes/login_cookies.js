import { Router } from "express";
import { } from "../controllers/userController.js";

const router = Router();

router.post('/loginCookie', loginCookie);

export default router;